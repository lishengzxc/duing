const getWidth = require('../helper/').getWidth;

const histogram = async function (ctx) {
  let {
    list,
  } = ctx.query;

  const {
    color = '01D48F',
    title = 'histogram for something',
  } = ctx.query;

  let itemWidth = 50;
  let maxValue = 0;

  list = JSON.parse(list);

  for (const item of list) {
    let { k, v } = item;

    k = k.toString();
    v = v.toString();

    item.textLength = getWidth(k, 11);
    item.valueLength = getWidth(v, 11);

    itemWidth = Math.max(itemWidth, getWidth(k, 11), getWidth(v, 11));
    maxValue = Math.max(maxValue, v);
  }

  await ctx.render('histogram', {
    list,
    itemWidth,
    maxValue,
    color,
    title,
    viewWidth: (itemWidth) * list.length,
    viewHeight: 100,
  });
};

module.exports = histogram;
