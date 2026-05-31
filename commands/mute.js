module.exports = (bot) => {
    bot.command('mute', async (ctx) => {
      const reply = ctx.message.reply_to_message;
      if (!reply) return ctx.reply("ریپلای کن روی کاربر");
  
      const userId = reply.from.id;
  
      try {
        await ctx.restrictChatMember(userId, {
          permissions: {
            can_send_messages: false
          }
        });
  
        ctx.reply("🔇 کاربر mute شد");
      } catch (e) {
        ctx.reply("❌ خطا");
      }
    });
  };