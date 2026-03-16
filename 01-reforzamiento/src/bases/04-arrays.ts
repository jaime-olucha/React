// Se puede crear un array con distintos tipos de datos;
const myArray: number[] = [1, 2, 3, 4, 5, 6];

// Para crear un nuevo array;
const myArray2 = [...myArray]; // Mejor usar un structureClone();

// Añadir
myArray.push(7)

console.log({ myArray, myArray2 });