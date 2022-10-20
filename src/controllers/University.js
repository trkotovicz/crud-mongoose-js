const { StatusCodes } = require('http-status-codes');
const universityService = require('../services/University');
const { validateUpdate, validateCreate } = require('../utils/validations');

module.exports = {

  listAll: async (_req, res) => {
    const result = await universityService.listAll();
    res.status(StatusCodes.OK).json(result);
  },

  getById: async (req, res) => {
    const { id } = req.params;
    const result = await universityService.getById(id);
    res.status(StatusCodes.OK).json(result);
  },

  deleteById: async (req, res) => {
    const { id } = req.params;
    await universityService.deleteById(id);
    res.status(StatusCodes.NO_CONTENT).end();
  },

  update: async (req, res) => {
    const { body, params } = req;
    validateUpdate(body);
    const university = await universityService.update({ _id: params.id }, body);
    res.status(StatusCodes.ACCEPTED).json(university);
  },

  create: async (req, res) => {
    const { body } = req;
    validateCreate(body);
    const university = await universityService.create(body);
    res.status(StatusCodes.CREATED).json(university);
  },
};
