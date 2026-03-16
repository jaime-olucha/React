// Desestructurar array []

const characterNames = ['Goku', 'Vegeta', 'Trunks'];
// A diferencia de los objetos los array deben ir desordenados;

const [, , trunks] = characterNames; // p1 es goku
console.log({ trunks });



const returnArrayFn = () => {
    return ['ABC', 123] as const; // Nos dice que nuestro array siempre devuelve esos tipos de dato
}

const [letters, numbers] = returnArrayFn()
console.log(letters, numbers);


// Funcion de desestructuracion de array.

// Esto es exactamente la funcion (HOOK) que usaremos en REACT
const useState = (value: string) => {
    return [
        value,
        (newValue: string) => {
            console.log(newValue);
        }
    ] as const;
};


// PERO SOLAMENTE LO LLAMAREMOS IMPORTANDO REACT;
const [name, setName] = useState('Goku');
console.log(name);
setName('Vegeta');
