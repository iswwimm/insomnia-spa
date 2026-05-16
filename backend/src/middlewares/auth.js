const crypto = require('crypto');
const safeCompare = (userInput, secret) => {
  const inputBuffer = Buffer.from(userInput || '');
  const secretBuffer = Buffer.from(secret || '');
  
  if (inputBuffer.length !== secretBuffer.length) {
    return false;
  }
  return crypto.timingSafeEqual(inputBuffer, secretBuffer);
};

const requireAdminAuth = (req, res, next) => {
  const adminPassword = req.headers['x-admin-password'];

  if (!safeCompare(adminPassword, process.env.ADMIN_PASSWORD)) {
    console.warn(`Attempt from ${req.ip}`);
    return res.status(403).json({ error: 'Access denied' });
  }

  next();
};

module.exports = { requireAdminAuth };