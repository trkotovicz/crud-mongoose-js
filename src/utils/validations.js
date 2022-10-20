/* eslint-disable camelcase */
const joi = require('joi');

const validateCreate = (data) => {
  const schema = joi.object({
    alpha_two_code: joi.string().length(2).required(),
    web_pages: joi.array().items(joi.string()).required(),
    name: joi.string().required(),
    domains: joi.array().items(joi.string()).required(),
    'state-province': joi.string().length(2),
  });

  const { error, value } = schema.validate(data);
  if (error) {
    error.name = 'ValidationError';
    error.status = 400;
    throw error;
  }
  return value;
};

const validateUpdate = (data) => {
  const schema = joi.object({
    web_pages: joi.array().items(joi.string()).required(),
    name: joi.string().required(),
    domains: joi.array().items(joi.string()).required(),
  });

  const { error, value } = schema.validate(data);
  if (error) {
    error.name = 'ValidationError';
    error.status = 400;
    throw error;
  }
  return value;
};

module.exports = { validateCreate, validateUpdate };