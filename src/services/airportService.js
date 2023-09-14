const {AirportRepository}= require('../repository/index');

class AirportService{
    constructor(){
        this.AirportRepository = new AirportRepository();
    }

    async createAirport(data){
        try {
            const airport = await this.AirportRepository.createAirport(data);
            return airport;
        } catch (error) {
            console.log("something went wrong at the service layer");
            throw(error);
        }
    }

    async deleteAirport(airportId){
        try {
            const response = await this.AirportRepository.deleteAirport(airportId);
            return response;
        } catch (error) {
            console.log("something went wrong at the service layer");
            throw(error);
        }
    }

    async getAirport(cityId){
        try {
            const response = await this.AirportRepository.getAirport(cityId);
            return response;
        } catch (error) {
            console.log("something went wrong at the service layer");
            throw(error);
        }
    }

    async updateAirport(airportId,data){
        try {
            const airport = await this.AirportRepository.updateAirport(airportId,data);
            return airport;
        } catch (error) {
            console.log("something went wrong at the service layer");
            throw(error);
        }
    }
}
module.exports= AirportService;