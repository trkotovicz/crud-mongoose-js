/* eslint-disable no-useless-computed-key */
const { StatusCodes } = require('http-status-codes');
const University = require('../models/University');

const notFoundMessage = 'University Not Found';

const listAll = async () => {
  const universities = await University.find({});
  return universities;
};

const getById = async (id) => {
  const university = await University.findById(id);
  if (!university) {
    const error = new Error(notFoundMessage);
    error.name = 'NotFoundError';
    error.status = StatusCodes.NOT_FOUND;
    throw error;
  }
  return university;
};

const deleteById = async (id) => {
  const university = await University.deleteOne({ _id: id });
  if (!university) {
    const error = new Error(notFoundMessage);
    error.name = 'NotFoundError';
    error.status = StatusCodes.NOT_FOUND;
    throw error;
  }
  return university;
};

const update = async (id, data) => {
  const university = await University.updateOne(id, data);
  if (!university) {
    const error = new Error(notFoundMessage);
    error.name = 'NotFoundError';
    error.status = StatusCodes.NOT_FOUND;
    throw error;
  }
  return university;
};

const checkIfExists = async (data) => {
  const university = await University.findOne({
    name: data.name,
    country: data.country,
    ['state-province']: data['state-province'],
  });
  if (university) {
    const error = new Error('University already exists');
    error.name = 'ConflictError';
    error.status = StatusCodes.CONFLICT;
    throw error;
  }
};

const create = async (data) => {
  await checkIfExists(data);
  const university = await University.create(data);
  return university;
};

module.exports = { listAll, getById, deleteById, update, create };