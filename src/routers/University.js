const { Router } = require('express');
const universityController = require('../controllers/University');

const router = Router();

router.get('/universities', universityController.listAll);
router.get('/universities/:id', universityController.getById);
router.delete('/universities/:id', universityController.deleteById);

module.exports = router;