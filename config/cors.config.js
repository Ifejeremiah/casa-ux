const { Properties } = require('../config');
const cors = require('cors');

module.exports.options = cors({
  origin: Properties.CORS_ORIGIN.split(','),
  credentials: true,
  optionSuccessStatus: 200,
});
