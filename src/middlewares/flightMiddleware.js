const validateCreateFlight=(req,res,next) =>{
    if(
        !req.body.flightNumber ||
        !req.body.airplaneId ||
        !req.body.departureAirportId ||
        !req.body.arrivalAirportId ||
        !req.body.arrivalTime ||
        !req.body.departureTime ||
        !req.body.price
    ){
        return res.status(400).json({
            data: {},
            message: 'invalid request body',
            success: false,
            err: 'missing mandatory properties for flight creation'
        })    
    }
    next();
}

module.exports = {
    validateCreateFlight
}