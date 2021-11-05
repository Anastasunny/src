const Plain = require('./plain')

class Freighter extends Plain {
    constructor(namePlain, producer, maxWeight, maxDistance, maxSpeed, maxHeight){
        super(namePlain, producer, maxDistance, maxSpeed, maxHeight);
        this.maxWeight = maxWeight;
    }
}

module.exports = Freighter;