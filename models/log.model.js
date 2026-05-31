const mongoose = require('mongoose');

const logSchema = new mongoose.Schema({
  userId: String,
  username: String,
  action: String,
  by: String,
  chatId: String,
  reason: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Log', logSchema);