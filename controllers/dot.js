const dot = async function (ctx, next) {
  let {
    width = 15,
    color = '01D48F'
  } = ctx.query;

  width = parseInt(width, 10);

  await ctx.render('dot', {
    width,
    color
  });
};

module.exports = dot;