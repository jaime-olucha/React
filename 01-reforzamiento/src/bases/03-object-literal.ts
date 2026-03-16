
// Interfaces;

export interface Person {
    firstName: string;
    lastName: string;
    age: number;

    // Opcional ?
    address: Address
}

interface Address {
    postalCode: string;
    city: string;
}


// Objeto literal: Representacion de un objeto literal;
const ironman: Person = {
    firstName: 'Tony',
    lastName: 'Stark',
    age: 45,
    address: {
        postalCode: 'ABC123',
        city: 'New York'
    }
}


console.log(ironman);




// ()
// A pesar de ser una constante, puedo cambiar las propiedades, pero no renombrar el objeto
// ironman.firstName = 'Peter';
// ironman.lastName = 'Parker';

// ()
// Para crear un objeto cogiendo de referencia:
/*
const spiderman = ironman;
spiderman.firstName = 'Peter';
spiderman.lastName = 'Parker';
spiderman.age = 22;
*/
// ↑ ESTO ES UN ERROR, no le decimos que cree un objeto nuevo con otro de referencia
// le decimos que use el mismo espacio en memoria que ironman
// Por lo que se sobreescribe

// Para que funcione (SOLO FUNCIONA LAS PROPIEDADES DEL PIRMER NIVEL):
/*
const spiderman = {...ironman};
spiderman.firstName = 'Peter';
spiderman.lastName = 'Parker';
spiderman.age = 22;
*/
// Si un objeto tiene otro objeto dentro no funcionaría.

// PARA QUE FUNCIONE SI O SI:
/*
const spiderman = structuredClone(ironman);
spiderman.firstName = 'Peter';
spiderman.lastName = 'Parker';
spiderman.age = 22;


// Los objetos siempre crearlos como constanes;
console.log({ironman}, {spiderman});
*/

