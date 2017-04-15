const Router = require('koa-router');

const progress = require('./controllers/progress');
const checkbox = require('./controllers/checkbox');

const svgContentType = require('./middlewares/svgContentType');

const router = new Router();

router.get('/progress', svgContentType, progress);
router.get('/checkbox', svgContentType, checkbox);

module.exports = router;
