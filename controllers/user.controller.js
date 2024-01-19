const { Response } = require('../models');

module.exports = { create };

function create(req, res, next) {
  Response.successResponse(res, 'User created successfully', req.body);
}
