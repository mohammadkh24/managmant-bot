module.exports = (bot) => {
    bot.command('kick', async (ctx) => {
      const reply = ctx.message.reply_to_message;
      if (!reply) return ctx.reply("ریپلای کن روی کاربر");
  
      const userId = reply.from.id;
  
      try {
        await ctx.banChatMember(userId);
        ctx.reply("👢 کاربر حذف شد");
      } catch (e) {
        ctx.reply("❌ خطا در حذف کاربر");
      }
    });
  };