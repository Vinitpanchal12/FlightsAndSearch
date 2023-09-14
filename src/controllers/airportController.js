const {AirportService} = require('../services/index');

const airportService = new AirportService();

const create = async (req,res) => {
    try {
        const airport = await airportService.createAirport(req.body);
        return res.status(201).json({
            data: airport,
            message: 'successfully created a airport',
            success: true,
            err: {}

        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            message: 'not able to create a airport',
            success: false,
            err: error
        })
    }
}


const get = async (req,res) => {
    try {
        const response = await airportService.getAirport(req.params.id);
        return res.status(200).json({
            data: response,
            message: 'successfully fetched a airport',
            success: true,
            err: {}

        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            message: 'not able to fetch a airport',
            success: false,
            err: error
        })
    }
}


const update = async (req,res) => {
    try {
        const response = await airportService.updateAirport(req.params.id, req.body);
        return res.status(200).json({
            data: response,
            message: 'successfully updated a airport',
            success: true,
            err: {}

        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            message: 'not able to update a airport',
            success: false,
            err: error
        })
    }
}


const destroy = async (req,res) => {
    try {
        const airport = await airportService.deleteAirport(req.params.id);
        return res.status(200).json({
            data: airport,
            message: 'successfully deleted a airport',
            success: true,
            err: {}

        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            message: 'not able to delete a airport',
            success: false,
            err: error
        })
    }
}
module.exports= {
    create,
    get,
    update,
    destroy
}