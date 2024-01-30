const { Response } = require('../models');
const StatusCodes = require('http-status-codes');
const { StudentService } = require('../services');

module.exports.create = function (req, res, next) {
  StudentService.create(req.body)
    .then(() => Response.successResponse(res, 'Student created successfully', null, StatusCodes.CREATED))
    .catch(next);
};

module.exports.findAll = function (req, res, next) {
  StudentService.findAll()
    .then((data) => Response.successResponse(res, 'Students fetched successfully', data))
    .catch(next);
};
