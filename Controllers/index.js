const router = require('express').Router();
const api = require('./api');
const home = require('./home.js');
const dashboard = require('./dashboards.js');


router.use('/api', api);
router.use('/dashboard', dashboard);
router.use('/', home);



module.exports = router;