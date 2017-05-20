const Router = require('koa-router');

const progress = require('./controllers/progress');
const checkbox = require('./controllers/checkbox');
const label = require('./controllers/label');
const seal = require('./controllers/seal');
const dot = require('./controllers/dot');
const histogram = require('./controllers/histogram');

const svgContentType = require('./middlewares/svgContentType');

const router = new Router();

router.get('/progress', svgContentType, progress);
router.get('/checkbox', svgContentType, checkbox);
router.get('/label', svgContentType, label);
router.get('/seal', svgContentType, seal);
router.get('/dot', svgContentType, dot);
router.get('/histogram', svgContentType, histogram);

module.exports = router;
