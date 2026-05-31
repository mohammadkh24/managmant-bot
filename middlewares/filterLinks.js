
module.exports = async (ctx, next) => {
    if (!ctx.message?.text) return next();
  
    const text = ctx.message.text;
  
    const hasLink = text.includes('http') || text.includes('t.me');
  
    if (hasLink) {
      try {
        await ctx.deleteMessage();
        await ctx.reply("🚫 ارسال لینک ممنوع است");
      } catch (e) {}
      return;
    }
  
    return next();
  };