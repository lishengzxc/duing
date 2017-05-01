const checkbox = async function (ctx) {
  let {
    size = 15,
    checked = false,
  } = ctx.query;

  size = parseInt(size, 10);
  checked = !!(+checked);

  const color = ctx.query.color || '01D48F';
  const points = [
    [0.13333333333333333, 0.5],
    [0.43333333333333335, 0.7333333333333333],
    [0.8333333333333334, 0.23333333333333334],
  ].map(value => value.map(item => item * size)).join(' ');

  await ctx.render('checkbox', {
    size,
    points,
    color,
    checked,
  });
};

module.exports = checkbox;
