const Joi = require('@hapi/joi');
const { ValidateBody } = require('../../config');

module.exports = {
  register,
};

function register(req, res, next) {
  const schema = Joi.object({
    first_name: Joi.string().trim(),
    last_name: Joi.string().trim(),
    email_address: Joi.string().trim(),
    residential_address: Joi.string().trim(),
    level_of_proficiency: Joi.string().trim(),
    education_status: Joi.string().trim(),
  });
  ValidateBody(req, next, schema);
}
