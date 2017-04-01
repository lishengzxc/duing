async function svgContentType(ctx, next) {
  await next();
  ctx.set('Content-Type', 'image/svg+xml');
}

module.exports = svgContentType;
