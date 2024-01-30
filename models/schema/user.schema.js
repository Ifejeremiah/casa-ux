const Joi = require('@hapi/joi');
const { ValidateBody } = require('../../config');

module.exports = function updatePassword(req, res, next) {
  const schema = Joi.object({
    currentPassword: Joi.string().trim().required(),
    newPassword: Joi.string().trim().custom(password).required(),
    confirmPassword: Joi.string().trim().valid(Joi.ref('newPassword')).required(),
  });
  ValidateBody(req, next, schema);
};

function password(value, helpers) {
  if (value.length < 8) {
    return helpers.message('Password must be at least 8 characters');
  }
  return value;
}
