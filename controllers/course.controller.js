const { Response } = require('../models');
const StatusCodes = require('http-status-codes');

module.exports = { register };

function register(req, res, next) {
  Response.successResponse(res, 'User registered successfully', null, StatusCodes.CREATED);
}
