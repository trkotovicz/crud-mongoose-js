const { Router } = require('express');
const universityController = require('../controllers/University');

const router = Router();

router.get('/universities', () => console.log(universityController));

module.exports = router;