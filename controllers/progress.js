const svg = async function (ctx, next) {
  let {
    type = 'index',
    width = 80,
    height = 20,
    percent = 0
  } = ctx.query;

  width = parseInt(width, 10) ;
  height = parseInt(height, 10);

  percent = Math.min(percent, 100);

  await ctx.render(type, {
    width, height, percent
  });
};

module.exports = svg;