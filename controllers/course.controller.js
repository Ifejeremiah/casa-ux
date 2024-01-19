const { Response } = require('../models');
const StatusCodes = require('http-status-codes');
const { CourseService } = require('../services');

module.exports.register = function (req, res, next) {
  CourseService.register(req.body)
    .then(() => Response.successResponse(res, 'User registered successfully', null, StatusCodes.CREATED))
    .catch(next);
};
