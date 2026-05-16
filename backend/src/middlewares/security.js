const rateLimit = require('express-rate-limit');

const checkoutLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: { error: 'Too many requests from this IP.' },
  standardHeaders: true, 
  legacyHeaders: false, 
});

const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, 
  max: 100,
  message: { error: 'Too many requests from this IP.' },
  standardHeaders: true,
  legacyHeaders: false,
});

module.exports = { 
  checkoutLimiter,
  apiLimiter
};