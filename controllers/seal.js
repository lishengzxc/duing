const getWidth = require('../helper/').getWidth;

const seal = async function (ctx) {
  let {
    size = 11,
    ghost = false,
  } = ctx.query;

  const {
    value = 'value',
    valueBgColor = '01D48F',
    valueColor = 'FFF',
  } = ctx.query;

  size = parseInt(size, 10);
  ghost = !!(+ghost);

  const valueWidth = getWidth(value, size);

  await ctx.render('seal', {
    ghost,
    size,
    valueWidth,
    valueBgColor,
    value,
    valueColor,
  });
};

module.exports = seal;
