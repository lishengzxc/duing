const getWidth = require('../helper/').getWidth;

const label = async function (ctx) {
  const {
    key = 'key',
    value = 'value',
    keyBgColor = '01D48F',
    valueBgColor = '555',
    keyColor = 'FFF',
    valueColor = 'FFF',
  } = ctx.query;

  let size = ctx.query.size || 11;

  size = parseInt(size, 10);

  const keyWidth = getWidth(key, size);
  const valueWidth = getWidth(value, size);

  await ctx.render('label', {
    size,
    keyWidth,
    valueWidth,
    keyBgColor,
    valueBgColor,
    key,
    value,
    keyColor,
    valueColor,
  });
};

module.exports = label;
