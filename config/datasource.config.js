const mongoose = require('mongoose');
const { Properties } = require('./');
const { Log } = require('../utils');

mongoose
  .connect(Properties.DB_URI)
  .then((connect) => {
    Log.info(`MongoDB Connected: ${connect.connection.host}`);
  })
  .catch((err) => {
    Log.error(err);
    process.exit(1);
  });

mongoose.Promise = global.Promise;

module.exports = {
  Course: require('../dao').CourseDao,
  ObjectId: mongoose.Types.ObjectId,
  isValidId,
};

function isValidId(id) {
  return mongoose.Types.ObjectId.isValid(id);
}
