const getWidth = require('../helper/').getWidth;

const seal = async function (ctx, next) {
  let {
    value = 'value',
    size = 11,
    valueBgColor = '01D48F',
    valueColor = 'FFF',
    ghost = false,
  } = ctx.query;

  size = parseInt(size, 10);
  ghost = !!(+ghost);

  let valueWidth = getWidth(value, size);

  await ctx.render('seal', {
    ghost,
    size,
    valueWidth,
    valueBgColor,
    value,
    valueColor
  });
};

module.exports = seal;