const express = require('express');
const router = express.Router();

const {FlightMiddleware}= require('../../middlewares/index');

const CityController = require('../../controllers/cityController');
const AirportController = require('../../controllers/airportController');
const FlightController = require('../../controllers/flightController');

router.post('/city', CityController.create);
router.get('/city/:id', CityController.get);
router.delete('/city/:id',CityController.destroy);
router.patch('/city/:id', CityController.update);
router.get('/city', CityController.getAll);
router.post('/cities',CityController.createMultiple);


router.post('/airport', AirportController.create);
router.get('/airport/:id', AirportController.get);
router.delete('/airport/:id', AirportController.destroy);
router.patch('/airport/:id', AirportController.update);


router.post(
    '/flights',
    FlightMiddleware.validateCreateFlight,
    FlightController.create
    );
router.get('/flights/:id', FlightController.get);
router.get('/flights',FlightController.getAll);
router.patch('/flights/:id',FlightController.update);


module.exports = router;

