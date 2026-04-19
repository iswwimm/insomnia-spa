const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json()); // Щоб сервер розумів формат JSON

// Тестовий роут
app.get('/api/test', (req, res) => {
  res.json({ message: "Привіт з бекенду!" });
});

app.listen(PORT, () => {
  console.log(`Сервер працює на порту ${PORT} 🚀`);
});