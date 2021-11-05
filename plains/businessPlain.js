const PassengerPlain = require('./passengerPlain')

class Business extends PassengerPlain {
    constructor(namePlain, producer, maxPassengerWeight, maxDistance, maxSpeed, maxHeight, businessSeats){
        super(namePlain, producer, maxDistance, maxSpeed, maxHeight);
        this.maxPassengerWeight = maxPassengerWeight;
        this.businessSeats = businessSeats;
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

    toString() {
        return `The plain '${this.namePlain}' has height: ${this.maxHeight}  and producer: ${this.producer}`
    }
}



module.exports = Business;























// class Business extends Plain {
//     constructor(namePlain, producer, maxPassengerWeight, maxDistance, maxSpeed, maxHeight, businessSeats, seatsAll){
//         super(namePlain, producer, maxPassengerWeight, maxDistance, maxSpeed, maxHeight);
//         this.businessSeats = businessSeats;
//         this.seats = seatsAll;
//     }
// }

