const StatusCodes = require('http-status-codes');
const {
  Response: { errorResponse },
} = require('../models');
const { Log } = require('../utils');

module.exports = { errorHandler, notFoundHandler };

function errorHandler(err, req, res, next) {
  switch (true) {
    case typeof err === 'string':
      const is404 = err.toLowerCase().endsWith('not found');
      const statusCode = is404 ? StatusCodes.NOT_FOUND : StatusCodes.BAD_REQUEST;
      Log.error(err);
      return errorResponse(res, err, statusCode);

    case err.name === 'ValidatorError':
      Log.error(err);
      return errorResponse(res, err.message, StatusCodes.BAD_REQUEST);

    case err.name === 'UnauthorizedError':
      Log.error(err);
      return errorResponse(res, err.message, StatusCodes.UNAUTHORIZED);

    default:
      Log.error(err);
      return errorResponse(res, err.message, StatusCodes.INTERNAL_SERVER_ERROR);
  }
}

function notFoundHandler(req, res, next) {
  return errorResponse(res, 'Could not find that resource', StatusCodes.NOT_FOUND);
}
