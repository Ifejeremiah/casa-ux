const { Response } = require('../models');
const StatusCodes = require('http-status-codes');
const { WaitListService } = require('../services');

module.exports.create = function (req, res, next) {
  WaitListService.create(req.body)
    .then(() => Response.successResponse(res, 'Subscribed to wait list successfully', null, StatusCodes.CREATED))
    .catch(next);
};

module.exports.findAll = function (req, res, next) {
  WaitListService.findAll()
    .then((data) => Response.successResponse(res, 'Subscribers fetched successfully', data))
    .catch(next);
};
