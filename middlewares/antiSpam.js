const users = new Map();

module.exports = async (ctx, next) => {
  if (!ctx.message?.from) return next();

  const userId = ctx.from.id;
  const now = Date.now();

  if (!users.has(userId)) {
    users.set(userId, []);
  }

  const timestamps = users.get(userId);

  timestamps.push(now);

  // فقط 5 پیام در 3 ثانیه
  const filtered = timestamps.filter(t => now - t < 3000);
  users.set(userId, filtered);

  if (filtered.length > 5) {
    try {
      await ctx.deleteMessage();
      await ctx.reply("⚠️ اسپم تشخیص داده شد");
    } catch (e) {}
    return;
  }

  return next();
};