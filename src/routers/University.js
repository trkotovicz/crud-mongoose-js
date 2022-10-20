const { Router } = require('express');
const universityController = require('../controllers/University');

const router = Router();

const route = '/universities';

router.get(route, universityController.listAll);
router.get(`${route}/:id`, universityController.getById);
router.delete(`${route}/:id`, universityController.deleteById);
router.put(`${route}/:id`, universityController.update);

module.exports = router;