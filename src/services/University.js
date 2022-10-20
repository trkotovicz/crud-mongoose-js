const { StatusCodes } = require('http-status-codes');
const University = require('../models/University');

const listAll = async () => {
  const universities = await University.find({});
  return universities;
};

const getById = async (id) => {
  const university = await University.findById(id);
  if (!university) {
    const error = new Error('University Not Found');
    error.name = 'NotFoundError';
    error.status = StatusCodes.NOT_FOUND;
    throw error;
  }
  return university;
};

const deleteById = async (id) => {
  const university = await University.deleteOne({ _id: id });
  if (!university) {
    const error = new Error('University Not Found');
    error.name = 'NotFoundError';
    error.status = StatusCodes.NOT_FOUND;
    throw error;
  }
  return university;
};

module.exports = { listAll, getById, deleteById };