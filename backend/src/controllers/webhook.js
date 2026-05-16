const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const prisma = require('../config/db');
const { sendCourseAccessEmail } = require('../utils/emailService');

const handleWebhook = async (req, res) => {
  const sig = req.headers['stripe-signature'];
  const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;

  let event;

  try {
    event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);
  } catch (err) {
    console.error(`Error processing webhook: ${err.message}`);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;

    try {
      const existingOrder = await prisma.order.findUnique({
        where: { stripeSessionId: session.id }
      });

      if (!existingOrder) {
        console.error('Order not found in DB for session:', session.id);
        return res.status(404).end();
      }

      if (existingOrder.status === 'paid') {
        console.log(`Duplicate webhook ignored for order: ${existingOrder.id}`);
        return res.json({ received: true, message: 'Already processed' });
      }

      const updatedOrder = await prisma.order.update({
        where: { stripeSessionId: session.id },
        data: { status: 'paid' },
      });

      console.log(`Payment successful! Order ${updatedOrder.id} updated.`);

      await sendCourseAccessEmail(updatedOrder.customerEmail, updatedOrder.customerName);

    } catch (error) {
      console.error('Error processing payment:', error);
      return res.status(500).end(); 
    }
  }

  res.json({ received: true });
};

module.exports = { handleWebhook };