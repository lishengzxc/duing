const svg = async function (ctx, next) {
  let {
    type = 'index',
    width = 80,
    height = 20,
    percent = 0
  } = ctx.query;

  percent = Math.min(percent, 100);

  await ctx.render(type, {
    width, height, percent
  });
};

module.exports = svg;