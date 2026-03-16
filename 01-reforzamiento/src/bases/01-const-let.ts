// Intentar siempre crear constantes. Es mas seguro y ligero
const firstName:string = 'Jaime';
const lastName = 'Olucha';

let diceNumber = 5;
diceNumber = 3;
// diceNumber = '3'; // Error de compilacion, pero en la consola si que funciona


console.log(`${firstName} ${lastName}`);

// Metodo string;

const containsLetterH = lastName.includes('h'); // Regresa valor boolean
console.log({containsLetterH, diceNumber}); // Si lo ponemos con llaves nos sale el nombre de la variable y el retorno

// USAR SIEMPRE CONST SI NO TENEMOS QUE CAMBIAR LAS VARIABLEs
