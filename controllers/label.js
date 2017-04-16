function getWidth(str, size) {
  let engReg = /[a-zA-Z0-9]/g;
  let engCount = (str.match(engReg) || []).length;

  return engCount * size / 2 + (str.length - engCount) * size;
}

const label = async function (ctx, next) {
  let {
    key = 'key',
    value = 'value',
    size = 11,
    keyBgColor = '01D48F',
    valueBgColor = '555',
    keyColor = 'FFF',
    valueColor = 'FFF',
  } = ctx.query;

  size = parseInt(size, 10);

  let keyWidth = getWidth(key, size);
  let valueWidth = getWidth(value, size);

  await ctx.render('label', {
    size,
    keyWidth,
    valueWidth,
    keyBgColor,
    valueBgColor,
    key,
    value,
    keyColor,
    valueColor
  });
};

module.exports = label;