const Joi = require('@hapi/joi');
const { ValidateBody } = require('../../config');

module.exports.create = function (req, res, next) {
  const schema = Joi.object({
    first_name: Joi.string().trim().required(),
    last_name: Joi.string().trim().required(),
    email_address: Joi.string()
      .regex(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/)
      .trim()
      .required(),
    residential_address: Joi.string().trim().required(),
    level_of_proficiency: Joi.string().valid('beginner', 'intermediate', 'advanced').required(),
    education_status: Joi.string().trim().required(),
  });
  ValidateBody(req, next, schema);
};
