const { StatusCodes } = require('http-status-codes');
const University = require('../models/University');

const list = async () => {
  const universities = await University.find({});
  return universities;
};

const getById = async (id) => {
  const universities = await University.findById(id);
  if (!universities) {
    const error = new Error('University Not Found');
    error.name = 'NotFoundError';
    error.status = StatusCodes.NOT_FOUND;
    throw error;
  }
  return universities;
};

module.exports = { list, getById };