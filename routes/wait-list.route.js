const router = require('express').Router();
const { WaitListSchema } = require('../models');
const { WaitListController } = require('../controllers');

router.route('/').post(WaitListSchema.create, WaitListController.create).get(WaitListController.findAll);

module.exports = router;
