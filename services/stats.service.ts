const Stats = require('../models/stats.model');

async function inc(chatId, field) {
  await Stats.updateOne(
    { chatId },
    { $inc: { [field]: 1 } },
    { upsert: true }
  );
}

async function get(chatId) {
  return await Stats.findOne({ chatId });
}

module.exports = { inc, get };