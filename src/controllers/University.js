const { StatusCodes } = require('http-status-codes');
const universityService = require('../services/University');

module.exports = {

  list: async (req, res) => {
    const result = await universityService.list();
    res.status(StatusCodes.OK).json(result);
  },

  getById: async (req, res) => {
    const { id } = req.params;
    const result = await universityService.getById(id);
    res.status(StatusCodes.OK).json(result);
  },
};
