const StatusCodes = require('http-status-codes');

module.exports = function (req, res) {
  res.status(StatusCodes.OK).json({ status: 'UP' });
};
