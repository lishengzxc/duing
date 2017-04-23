const svg = async function (ctx) {
  let {
    width = 80,
    height = 20,
    percent = 0,
  } = ctx.query;

  const type = ctx.query.type || 'index';
  percent = Math.min(percent, 100);

  width = parseInt(width, 10);
  height = parseInt(height, 10);
  percent = parseInt(percent, 10);

  await ctx.render(type, {
    width, height, percent,
  });
};

module.exports = svg;
