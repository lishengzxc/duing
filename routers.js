const Router = require('koa-router');

const progress = require('./controllers/progress');
const svgContentType = require('./middlewares/svgContentType');

const router = new Router();

router.get('/progress', svgContentType, progress);

module.exports = router;
