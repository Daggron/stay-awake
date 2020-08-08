const router = require('express').Router();
const controller = require('../controllers/index');

router.post('/', controller.postUrl);
router.get('/all', controller.getAll);

module.exports = router;