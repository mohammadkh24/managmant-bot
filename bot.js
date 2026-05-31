const { Telegraf } = require('telegraf');
const connectDB = require('./db');
const { inc } = require('./services/stats.service');

const adminOnly = require('./middlewares/adminOnly');

const kick = require('./commands/kick');
const ban = require('./commands/ban');
const mute = require('./commands/mute');
const logs = require('./commands/logs');

const bot = new Telegraf(process.env.BOT_TOKEN);

connectDB();

// 📊 شمارش پیام‌ها
bot.on('text', async (ctx, next) => {
  await inc(ctx.chat.id, "messages");
  return next();
});

// middleware
bot.use(adminOnly);

// commands
kick(bot);
ban(bot);
mute(bot);
logs(bot);

bot.start((ctx) => ctx.reply("🤖 Bot ready"));

bot.launch();
console.log("🤖 running...");