const Log = require('../models/log.model');

async function createLog(data) {
  await Log.create(data);
}

async function getLogs(chatId) {
  return await Log.find({ chatId })
    .sort({ createdAt: -1 })
    .limit(50);
}

module.exports = { createLog, getLogs };