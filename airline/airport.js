class Airport {
    constructor(freighter = false){
        this.passengerPlainsPool = [];
        if (freighter) {
            this.freighterPlainsPool = [];
        }
    }

    addEconomyPassengerPlain(economy) { 
        this.passengerPlainsPool.push(economy)
    }

    addBusinessyPassengerPlain(business) {
        this.passengerPlainsPool.push(business)
    }

    addFreighterPlain(freighter) {
        if (this.freighterPlainsPool) {
            this.freighterPlainsPool.push(freighter)
        } else {
            console.log('No freighter needed');
        }
    }


    addEconomyPlains(economy) {
        this.passengerEconomyPlainsPool = [...this.passengerPlainsPool, ...economy];
    }

    addBusinessPlains(business) {
        this.passengerBusinessPlainsPool = [...this.passengerPlainsPool, ...business];
    }

    addFreighterPlains(freighter) {
        this.freighterPlainsPool = [...this.freighterPlainsPool, ...freighter];
    }   


    classFilter(maxHeight, maxPassengerWeight, producer, choose) {
        if (choose == 1) {
            return (this.passengerBusinessPlainsPool.find((business) => 
                ((business.getMaxHeight() >= maxHeight)) && 
                (business.getMaxPassengerWeight() >= maxPassengerWeight) && 
                (business.getProducer() == producer))) 
                
        } else if (choose == 2) {
            return (this.passengerEconomyPlainsPool.find((economy) => 
                ((economy.getMaxHeight() >= maxHeight)) && 
                (economy.getMaxPassengerWeight() >= maxPassengerWeight) && 
                (economy.getProducer() == producer)));
        } else {
            return console.log('Enter only 1 or 2'); 
        }
    }
}

module.exports = Airport;