const router = require('express').Router();
const { HealthController } = require('../controllers');

router.post('/', HealthController);

module.exports = router;
