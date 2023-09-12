const express = require('express');
const router = express.Router();

const CityController = require('../../controllers/cityController')

router.post('/city', CityController.create);
router.get('/city/:id', CityController.get);
router.delete('/city/:id',CityController.destroy);
router.patch('/city/:id', CityController.update);
router.get('/city', CityController.getAll);


module.exports = router;

