const { createLog } = require('../services/log.service');
const { inc } = require('../services/stats.service');

module.exports = (bot) => {
  bot.command('ban', async (ctx) => {
    const reply = ctx.message.reply_to_message;
    if (!reply) return ctx.reply("ریپلای کن");

    await ctx.banChatMember(reply.from.id);

    await createLog({
      userId: reply.from.id,
      username: reply.from.username,
      action: "ban",
      by: ctx.from.username,
      chatId: ctx.chat.id
    });

    await inc(ctx.chat.id, "bans");

    ctx.reply("🚫 بن شد");
  });
};