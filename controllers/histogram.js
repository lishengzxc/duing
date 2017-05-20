const getWidth = require('../helper/').getWidth;

const histogram = async function (ctx) {
  let {
    list,
  } = ctx.query;

  const {
    color = '01D48F',
    title = 'histogram for something',
    type = 'histogram',
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

  const viewHeight = 100;
  const viewWidth = (itemWidth) * list.length;

  let dPath = 'M';
  let initDPath = 'M';

  if (type === 'line') {
    for (let i = 0; i < list.length; i++) {
      dPath += `${itemWidth * (i + 1.5)},${viewHeight + 60 - (list[i].v / maxValue) * viewHeight}L`;
      initDPath += `${itemWidth * (i + 1.5)},95L`;
    }
  }

  dPath = dPath.slice(0, -1);
  initDPath = initDPath.slice(0, -1);

  await ctx.render('histogram', {
    type,
    list,
    dPath,
    initDPath,
    itemWidth,
    maxValue,
    color,
    title,
    viewWidth,
    viewHeight,
  });
};

module.exports = histogram;
