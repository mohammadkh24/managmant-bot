const { createLog } = require('../services/log.service');
const { inc } = require('../services/stats.service');

function parseTime(t) {
  const m = t?.match(/(\d+)(m|h|d)/);
  if (!m) return 60000;

  const v = parseInt(m[1]);
  const type = m[2];

  if (type === 'm') return v * 60000;
  if (type === 'h') return v * 3600000;
  if (type === 'd') return v * 86400000;
}

module.exports = (bot) => {
  bot.command('mute', async (ctx) => {
    const reply = ctx.message.reply_to_message;
    if (!reply) return ctx.reply("ریپلای کن");

    const args = ctx.message.text.split(' ');
    const time = parseTime(args[1]);

    await ctx.restrictChatMember(reply.from.id, {
      permissions: { can_send_messages: false }
    });

    await createLog({
      userId: reply.from.id,
      username: reply.from.username,
      action: "mute",
      by: ctx.from.username,
      chatId: ctx.chat.id,
      reason: args[1]
    });

    await inc(ctx.chat.id, "mutes");

    ctx.reply(`🔇 mute شد ${args[1]}`);

    setTimeout(async () => {
      try {
        await ctx.restrictChatMember(reply.from.id, {
          permissions: { can_send_messages: true }
        });
      } catch {}
    }, time);
  });
};