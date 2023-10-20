// variables
var a; // declarando
var b = 'b' // declaramos y asignamos
b = 'bb'; // reasignación
var a = 'aa'; // redeclaración

// Global Scope -> se coloca en el objeto Window
var fruit = 'Apple'; // Global
function bestFruit(){
    console.log(fruit);
}

bestFruit();


function countries(){
    country = "Peru"; // global sin necesidad de declarar previamente
    console.log(country);
}

countries();
console.log(country);