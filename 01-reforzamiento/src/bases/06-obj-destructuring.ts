// Destructuracion, crear variables con las propiedades de un objeto;
const person = {
    name: 'Tony',
    age: 45,
    key: 'Ironman'
};

// onst { name, age, key } = person;
// console.log(name, age, key);

interface Hero {
    name: string;
    age: number;
    key: string;
    rank?: string | undefined; // Dos tipos posibles;
}

const useContext = ({ key, name, age, rank }: Hero) => { // Desestructurar directamente en una funcion
    return {
        keyName: key,
        user: {
            name: name,
            age: age,
        },
        rank: rank
    }
}

const { rank, keyName, user: { name } } = useContext(person);
console.log({ rank, keyName, name });

