const prompt = require('prompt-promise');

const Economy = require('./plains/economyPlain');
const Business = require('./plains/businessPlain')
const Freighter = require('./plains/freighterPlain')
const PassengerPlain = require('./plains/passengerPlain')

let Airport = require('./airline/airport');

let airport = new Airport(true);

const PlainBuilder = require('./plains/plain')
const Plain = require('./plains/plain')

let economy = [ 
    new Economy('Boeing 737-300', 'USA', 63276, 4400, 910, 10200, 148), 
    new Economy('Boeing 737-800', 'USA', 79000, 5450, 853, 12500, 189), 
    new Economy('Boeing 737-500', 'USA', 52300, 4444, 912, 11300, 129), 
 
].sort((a, b) => a.maxDistance - b.maxDistance); 
 
let allEconomySeats = (economy.reduce((acc, currentValue) => acc += currentValue.economySeats, 0)); 
let economyMaxPassengerWeight = (economy.reduce((acc, currentValue) => acc += currentValue.maxPassengerWeight, 0)); 

console.log(`All economy seats amount: ${allEconomySeats}, economy max passengers weight: ${economyMaxPassengerWeight}`); 
 
let business = [ 
    new Business('Embraer 175', 'Brazil', 38790, 3334, 870, 12500, 12), 
    new Business('Embraer 195-E2', 'Brazil', 61500, 4800, 870, 12500, 9), 
    new Business('Embraer 195', 'Brazil', 50790, 3900, 880, 12500, 11), 
    new Business('Boeing 737-8', 'USA', 79000, 4444, 912, 11300, 12), 
 
].sort((a, b) => a.maxDistance - b.maxDistance); 
 
let allBusinessSeats = (business.reduce((acc, currentValue) => acc += currentValue.businessSeats, 0)); 
let businessMaxPassengerWeight = (business.reduce((acc, currentValue) => acc += currentValue.maxPassengerWeight, 0)); 

console.log(`All business seats amount: ${allBusinessSeats}, business max passengers weight: ${businessMaxPassengerWeight}`); 
console.log('All available seats amount:', allEconomySeats + allBusinessSeats);
console.log('Both (Business & Economy) max passengers weight: ', economyMaxPassengerWeight + businessMaxPassengerWeight); 
 
let freighter = [ 
    new Freighter('ТУ 204C', 'Russia', 30000, 2370, 900, 12100), 
    new Freighter('L100-30', 'USA', 20000, 3790, 571, 6100), 
    new Freighter('АН 74', 'Russia', 8000, 5700, 640, 6500), 
 
].sort((a, b) => a.maxDistance - b.maxDistance);

let allMaxWeight = (freighter.reduce((acc, currentValue) => acc += currentValue.maxWeight, 0))
console.log('All freighter`s max weight: ', allMaxWeight);

airport.addEconomyPlains(economy); 
airport.addBusinessPlains(business); 
airport.addFreighterPlains(freighter);

console.log(business);
console.log(freighter);
console.log(economy);

(async () => {
    const choose = await prompt(' Enter plain type: 1 if you want business class and 2 if economy class: ');
    const maxHeight = await prompt(' Enter max height: ');
    const maxPassengerWeight = await prompt(' Enter max Passenger Weight: ');
    const producer = await prompt(' Enter producer(USA or Brazil): ');
    
    const passengerPlain = airport.classFilter(maxHeight, maxPassengerWeight, producer, choose);
    console.log(passengerPlain.toString());
})();