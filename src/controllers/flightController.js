
const {FlightService} = require("../services/index")

const flightService = new FlightService();

const create = async (req,res)=> {
    try {
        const flight = await flightService.createFlight(req.body);
        return res.status(201).json({
            data: flight,
            success: true,
            message:'successfully created a flight',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message:'not able to create a flight',
            err: error
        }); 
    }
}
const get = async (req,res)=> {
    try {
        const flight = await flightService.getFlight(req.params.id);
        return res.status(200).json({
            data: flight,
            success: true,
            message:'successfully fetched a flight',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message:'not able to fetch a flight',
            err: error
        }); 
    }
}



const getAll = async (req,res)=> {
    try {
        const flights = await flightService.getAllFlight(req.query);
        return res.status(200).json({
            data: flights,
            success: true,
            message:'successfully fetched all flights',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message:'not able to fetch all flight',
            err: error
        }); 
    }
}
module.exports ={
    create,
    getAll,
    get
}