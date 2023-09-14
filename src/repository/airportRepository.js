const {Airport} = require('../models/index');

class AirportRepository{
    async createAirport(data){
        try {
            const airport = await Airport.create(data);
            return airport;
        } catch (error) {
            throw(error);
        }
    }


    async getAirport(airportId){
        try {
            const airport = await Airport.findByPk(airportId);
            return airport;
        } catch (error) {
            throw(error);
        }
    }



    async deleteAirport(airportId){
        try {
             await Airport.destroy({
                where:{
                    id: airportId
                }
             });
        } catch (error) {
            throw(error);
        }
    }



    async updateAirport(airportId,data){
        try {
            const airport = await Airport.update(data,{
                where:{
                    id: airportId
                }
            });
            airport.name = data.name;
            airport.address = data.address;
            await airport.save();
            return airport;
        } catch (error) {
            throw(error);
        }
    }

}
module.exports =AirportRepository;