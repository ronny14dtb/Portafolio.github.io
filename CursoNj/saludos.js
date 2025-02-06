function saludar (){
    return "Hola ";
}

function saludarHolaMundo(){
    return "Hola Mundo";
}

module.exports = {
    saludar: saludar,
    saludarHolaMundo: saludarHolaMundo
} 

/* Export en otro archivo del mismo directorio

const saludos = require('./saludos.js'); //Importamos la función saludo

console.log(saludos.saludar()); //Hola 
console.log(saludos.saludarHolaMundo()); //Hola Mundo

*/