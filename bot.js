const { Telegraf } = require('telegraf');
const { BOT_TOKEN } = require('./config');

// middlewares
const antiSpam = require('./middlewares/antiSpam');
const filterLinks = require('./middlewares/filterLinks');

const startCommand = require('./commands/start');
const kickCommand = require('./commands/kick');
const muteCommand = require('./commands/mute');
const lockCommand = require('./commands/lock');
const unlockCommand = require('./commands/unlock');

const bot = new Telegraf(BOT_TOKEN);

// Middlewares
bot.use(antiSpam);
bot.use(filterLinks);

// Commands
startCommand(bot);
kickCommand(bot);
muteCommand(bot);
lockCommand(bot);
unlockCommand(bot);

bot.launch();
console.log("🤖 Bot is running...");