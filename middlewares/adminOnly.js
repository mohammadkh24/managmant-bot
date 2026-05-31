module.exports = async (ctx, next) => {
    try {
      const chatMember = await ctx.telegram.getChatMember(
        ctx.chat.id,
        ctx.from.id
      );
  
      if (chatMember.status === 'administrator' || chatMember.status === 'creator') {
        return next();
      }
  
      return ctx.reply("⛔ فقط ادمین‌ها اجازه دارند");
    } catch (e) {
      return next();
    }
  };