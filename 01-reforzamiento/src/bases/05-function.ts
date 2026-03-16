// Maneras de definir;

// Normal;
function greet(name: string): string {
    return `Hola ${name}`
}

// Funciones de flecha
const greet2 = (name: string): string => `Hola ${name}`;

const message = greet('Goku');
const message2 = greet2('Vegeta');
console.log(message, message2);


interface User {
    uid: string;
    username: string;
}

function getUser(): User {
    return {
        uid: 'ABC-123',
        username: 'El_Papi23'
    }
}

const getUser2 = (): User => ({ // Retorno implicito con ()
    uid: 'ABC-456',
    username: 'La_Mami26'
})

const user = getUser()
const user2 = getUser2()
console.log(user, user2);


// Callbakcs;

const myNumber: number[] = [1, 2, 3, 4, 5];

myNumber.forEach((value) => {
    console.log({ value });
});


// Mandar, valor, indice y array
myNumber.forEach((value, index, array) => {
    console.log(value, index, array)
})

// ↑ ES LO MISMO PERO SIMPLIFICADO;
myNumber.forEach(console.log)
