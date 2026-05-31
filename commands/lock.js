let locked = false;

module.exports = (bot) => {
  bot.command('lock', (ctx) => {
    locked = true;
    ctx.reply("🔒 گروه قفل شد");
  });

  bot.on('text', async (ctx, next) => {
    if (locked) {
      try {
        await ctx.deleteMessage();
      } catch (e) {}
      return;
    }
    return next();
  });
};