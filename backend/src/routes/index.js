const express = require('express');
const router = express.Router();

const checkoutRoutes = require('./checkout');
const webhookRoutes = require('./webhook');
const adminRoutes = require('./admin');

router.use('/checkout', checkoutRoutes);
router.use('/webhook', webhookRoutes);
router.use('/admin', adminRoutes);

module.exports = router;