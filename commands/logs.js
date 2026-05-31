const { getLogs } = require('../services/log.service');

module.exports = (bot) => {
  bot.command('logs', async (ctx) => {
    const logs = await getLogs(ctx.chat.id);

    let text = "📊 آخرین لاگ‌ها:\n\n";

    logs.forEach(l => {
      text += `• ${l.action} | ${l.username || l.userId} | by ${l.by}\n`;
    });

    ctx.reply(text);
  });
};