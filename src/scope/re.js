var firstName; // Undefined
firstName = 'Alex';
console.log(firstName);

var lastName = 'Falcon'; // declarar y asignar
lastName = 'Flores'; // asignar
console.log(lastName);

var secondName = 'Stefano'; // declarando y asignando
var secondName = 'Ana'; // reasignado
console.log(secondName);

// LET
let fruit = 'Apple'; // declarar y asignar
fruit = 'Kiwi'; // reasignar
console.log(fruit);

// CONST
const animal = 'dog'; // declara y asigna
animal = 'cat'; // TypeError
console.log(animal);

const vehicles = [];
vehicles.push('🚗')
console.log(vehicles);
vehicles.pop();
console.log(vehicles);
