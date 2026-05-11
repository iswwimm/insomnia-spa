require('dotenv').config();
const express = require('express');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const { sendCourseAccessEmail } = require('./utils/emailService');
const { PrismaClient } = require('@prisma/client');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const prisma = new PrismaClient();
const app = express();

const allowedOrigins = [process.env.FRONTEND_URL];
app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('CORS Policy: Access Denied'));
    }
  }
}));


app.post('/api/webhook', express.raw({ type: 'application/json' }), async (req, res) => {
  const sig = req.headers['stripe-signature'];
  const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;

  let event;

  try {
    event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);
  } catch (err) {
    console.error(`Error Webhook: ${err.message}`);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;

    try {
      const updatedOrder = await prisma.order.update({
        where: { stripeSessionId: session.id },
        data: { status: 'paid' },
      });

      console.log(`Payment for order ${updatedOrder.id} completed.`);

      await sendCourseAccessEmail(updatedOrder.customerEmail, updatedOrder.customerName);

    } catch (error) {
      console.error('Error updating DB or sending email:', error);
    }
  }

  res.json({ received: true });
});

app.use(express.json());

const checkoutLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5, 
  message: { error: 'You have exceeded the request limit. Please try again in 15 minutes.' },
  standardHeaders: true, 
  legacyHeaders: false, 
});

app.post('/api/checkout/create-session', checkoutLimiter, async (req, res) => {
  try {
    const { name, email, phone } = req.body;

    if (!name || !email || !phone) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    const order = await prisma.order.create({
      data: {
        customerName: name,
        customerEmail: email,
        customerPhone: phone,
        status: 'pending',
      },
    });

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card', 'blik', 'p24'],
      line_items: [
        {
          price_data: {
            currency: 'pln',
            product_data: {
              name: 'Insomnia Course Pro',
            },
            unit_amount: 49900, 
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${process.env.FRONTEND_URL}/?payment=success`,
      cancel_url: `${process.env.FRONTEND_URL}/?payment=cancelled`,
      customer_email: email,
      client_reference_id: order.id, 
    });

    await prisma.order.update({
      where: { id: order.id },
      data: { stripeSessionId: session.id },
    });

    res.json({ url: session.url });

  } catch (error) {
    console.error('Error on server:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Secure server started at http://localhost:${PORT}`);
});