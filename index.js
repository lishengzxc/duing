const path = require('path');
const Koa = require('koa');
const render = require('koa-ejs');

const router = require('./routers');

const app = new Koa();

render(app, {
  root: path.join(__dirname, 'views'),
  viewExt: 'svg',
  layout: false,
  cache: false,
  debug: true
});

app
  .use(router.routes())
  .use(router.allowedMethods());
  

app.listen(3000);

module.exports = app;