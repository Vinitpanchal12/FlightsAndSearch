const {FlightService} = require("../services/index")
const{SuccessCodes}= require('../utils/errorCodes');

const flightService = new FlightService();

const create = async (req,res)=> {
    try {
        let flightRequestBody ={
            flightNumber:req.body.flightNumber ,
            airplaneId:req.body.airplaneId ,
            departureAirportId:req.body.departureAirportId ,
            arrivalAirportId: req.body.arrivalAirportId ,
            arrivalTime:req.body.arrivalTime ,
            departureTime:req.body.departureTime ,
            price:req.body.price
        }
        const flight = await flightService.createFlight(flightRequestBody);
        return res.status(SuccessCodes.CREATED).json({
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
        return res.status(SuccessCodes.OK).json({
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
        return res.status(SuccessCodes.OK).json({
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

const update = async (req,res)=> {
    try {
        const response = await flightService.updateFlight(req.params.id, req.body);
        return res.status(SuccessCodes.OK).json({
            data: response,
            success: true,
            message:'successfully updated a flight',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message:'not able to update a flight',
            err: error
        }); 
    }
}


module.exports ={
    create,
    getAll,
    get,
    update
}