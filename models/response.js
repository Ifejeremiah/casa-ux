const StatusCodes = require('http-status-codes');

module.exports = {
    successResponse,
    errorResponse
}

function successResponse(res, message = 'Done successfully', data = null, statusCode = null) {
    const body = {
        success: true,
        message,
        data,
    }

    return res.status(statusCode | StatusCodes.OK).json(body);
}

function errorResponse(res, message = 'there is an error', statusCode, data = null) {
    const body = {
        success: false,
        message,
        data,
    }

    return res.status(statusCode | StatusCodes.BAD_REQUEST).json(body);
}
