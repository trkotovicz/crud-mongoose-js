const { Router } = require('express');
const universityController = require('../controllers/University');

const router = Router();

router.get('/universities', universityController.list);
router.get('/universities/:id', universityController.getById);

module.exports = router;