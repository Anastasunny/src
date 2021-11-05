const PassengerPlain = require('./passengerPlain')

class Economy extends PassengerPlain {
    constructor(namePlain, producer, maxPassengerWeight, maxDistance, maxSpeed, maxHeight, economySeats){
        super(namePlain, producer, maxDistance, maxSpeed, maxHeight);
        this.maxPassengerWeight = maxPassengerWeight;
        this.economySeats = economySeats;
    }
    getMaxHeight() {
        return this.maxHeight;
    }

    getMaxPassengerWeight() {
        return this.maxPassengerWeight;
    }

    getProducer() {
        return this.producer;
    }
 }

module.exports = Economy;