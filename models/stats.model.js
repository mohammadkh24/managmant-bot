const mongoose = require('mongoose');

const statsSchema = new mongoose.Schema({
  chatId: { type: String, unique: true },

  messages: { type: Number, default: 0 },
  bans: { type: Number, default: 0 },
  kicks: { type: Number, default: 0 },
  mutes: { type: Number, default: 0 }
});

module.exports = mongoose.model('Stats', statsSchema);