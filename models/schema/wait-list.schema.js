const Joi = require('@hapi/joi');
const { ValidateBody } = require('../../config');

module.exports.create = function (req, res, next) {
  const schema = Joi.object({
    email: Joi.string()
      .regex(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/)
      .trim()
      .required(),
  });
  ValidateBody(req, next, schema);
};
