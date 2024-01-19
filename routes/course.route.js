const router = require('express').Router();
const { CourseController } = require('../controllers');
const { CourseSchema } = require('../models');

router.post('/register', CourseSchema.register, CourseController.register);

module.exports = router;
