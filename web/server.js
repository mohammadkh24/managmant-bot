const express = require('express');
const cors = require('cors');

const Log = require('../models/log.model');
const Stats = require('../models/stats.model');

const app = express();

app.use(cors());
app.use(express.json());

// 📊 stats
app.get('/stats/:chatId', async (req, res) => {
  const data = await Stats.findOne({ chatId: req.params.chatId });
  res.json(data || {});
});

// 🧾 logs
app.get('/logs/:chatId', async (req, res) => {
  const logs = await Log.find({ chatId: req.params.chatId })
    .sort({ createdAt: -1 })
    .limit(50);

  res.json(logs);
});

app.listen(3000, () => {
  console.log("🌐 Dashboard: http://localhost:3000");
});