const express = require('express');
const router = express.Router();

const CityController = require('../../controllers/cityController')

router.post('/city', CityController.create);

module.exports = router;

