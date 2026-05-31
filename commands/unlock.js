let locked = true;

module.exports = (bot) => {
  bot.command('unlock', (ctx) => {
    locked = false;
    ctx.reply("🔓 گروه باز شد");
  });
};