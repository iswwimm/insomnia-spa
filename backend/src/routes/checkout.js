const express = require('express');
const { checkoutLimiter } = require('../middlewares/security');
const { createSession } = require('../controllers/checkout');

const router = express.Router();

router.post('/create-session', checkoutLimiter, createSession);

module.exports = router;