const router = require('express').Router();
const { StudentSchema } = require('../models');
const { StudentController } = require('../controllers');

router.route('/').post(StudentSchema.create, StudentController.create).get(StudentController.findAll);

module.exports = router;
