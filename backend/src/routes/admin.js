const express = require('express');
const { requireAdminAuth } = require('../middlewares/auth');
const { getOrders } = require('../controllers/admin');

const router = express.Router();

router.get('/orders', requireAdminAuth, getOrders);

module.exports = router;