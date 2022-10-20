const { StatusCodes } = require('http-status-codes');
const universityService = require('../services/University');

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
  
};
