const dot = async function (ctx) {
  let {
    width = 15,
  } = ctx.query;

  const color = ctx.query.color || '01D48F';

  width = parseInt(width, 10);

  await ctx.render('dot', {
    width,
    color,
  });
};

module.exports = dot;
