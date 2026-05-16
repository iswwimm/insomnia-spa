const prisma = require('../config/db');

const getOrders = async (req, res) => {
  try {
    const orders = await prisma.order.findMany({
      orderBy: {
        createdAt: 'desc',
      },
      select: {
        id: true,
        customerName: true,
        customerEmail: true,
        customerPhone: true,
        status: true,
        createdAt: true,
      }
    });

    res.json(orders);
  } catch (error) {
    console.error('❌ Error fetching orders:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = { getOrders };