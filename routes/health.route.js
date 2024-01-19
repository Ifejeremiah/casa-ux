const router = require('express').Router();
const { HealthController } = require('../controllers');

router.get('/', HealthController);

module.exports = router;
