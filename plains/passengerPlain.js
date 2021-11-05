const Plain = require('./plain')

class PassengerPlain extends Plain {
    constructor(namePlain, producer, maxPassengerWeight, maxDistance, maxSpeed, maxHeight){
        super(namePlain, producer, maxPassengerWeight, maxDistance, maxSpeed, maxHeight);
        this.maxPassengerWeight = maxPassengerWeight;
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


module.exports = PassengerPlain;