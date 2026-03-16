# REACT - Curso Udemy (SECCION 3)

## SECCION 3: Refuerzo JavaScript/TypeScript

### Introducción

Todo el codigo de JS nos vale en TS pero con TS podemos reforzar el codigo, tipando los datos y con el compilador.

Aprenderemos sobre:

- Usar const, let y var correctamente.
- Escribir textos con template strings.
- Crear y usar interfaces en TypeScript.
- Trabajar con arreglos y recorrerlos.
- Definir funciones simples y complejas.
- Retornar múltiples valores desde funciones.
- Desestructurar objetos y arreglos.
- Usar enums para valores constantes.
- Importar y exportar módulos.
- Trabajar con promesas.
- Hacer peticiones con Fetch API.
- Usar la API de Giphy para obtener GIFs.
- Optimizar código con buenas prácticas.
- Escribir código asincrónico con async/await.
- Realizar tareas prácticas guiadas.

### Inicio de proyecto.

Para crear un proyecto de 0 con Vite y TupeScript.

1. Crear el directorio.
2. Crear el entorno de vite: `npm create vite`.
3. Rellenar nombre del proyecto.
4. Elegir el framework y la tecnología (en el caso de refuerzo elegimos Vanilla y Typescript).
5. En principio ya se instalarán las dependencias, pero si no, `npm install` y para desplegar npm run dev.
6. Entrar en el entorno creado en localhost: http://localhost:5173/
7. control + c para salir, npm run dev para volver

### Explicacion y estructura de directorios.

- **node_modules**: Aquí hay muchisimas cosas... No subir a un repositorio. Añadirlo en .gitignore
- **package.json**: Nombre paquete, tipo de app, definicion de scripts...Dependencias que se usarán en el proyecto (con npm install instalamos las necesarias).
- **public**: ahora solamente el logo de vite.
- **src**: donde trabajarémos.
- **.gitignore**: archivos que no se suben al repo.
- **index.html**: donde se está montando la app
- **tsconfig.json**: Configuracion del proyecto de TS, no hace falta tocar nada de momento.

### Variables y Constantes

No usar nunca var, usar let o const.

- Const para constantes, valores que nunca vamos a cambiar.
- Let, variables que pueden modificar su valor.

Como refuerzo TS nos permite decirle a la variable que tipo de dato es, evitamos errores futuros, lo hacemos de la siguiente manera:

```typescript
const firstName: string = "Jaime";
const lastName: string = "Olucha";
let diceNumber: number = 5;

const containsLetterH = lastName.includes("h"); // Regresa valor boolean

// Si lo ponemos con llaves nos sale el nombre de la variable y el retorno
console.log({ containsLetterH, diceNumber });
```

### Template Strings:

```ts
const firstName = "Jaime";
const lastName = "O'Neal";

console.log(lastName);

// Expresiones con template strings;
const fullName = `${firstName} ${lastName}`;

console.log(fullName);
```

### Objetos Literales

Objeto literal: Representacion de un objeto literal;

```ts
const ironman = {
    firstName: "Tony",
    lastName: "Stark",
    age: 45,
    address: {
        postalCode: "ABC123",
        city: "New York",
    },
};
// A pesar de ser una constante, puedo cambiar las propiedades, pero no renombrar el objeto
ironman.firstName = "Peter";
ironman.lastName = "Parker";
```

PARA HACER UN OBJETO COGIENDO DE REFERENCIA A OTRO:

- MAL:

```ts
const spiderman = ironman;
spiderman.firstName = "Peter";
spiderman.lastName = "Parker";
spiderman.age = 22;
// ↑ ESTO ES UN ERROR, no le decimos que cree un objeto nuevo con otro de referencia
// le decimos que use el mismo espacio en memoria que ironman
// Por lo que se sobreescribe

const spiderman = { ...ironman };
spiderman.firstName = "Peter";
spiderman.lastName = "Parker";
spiderman.age = 22;
// SOLO FUNCIONA LAS PROPIEDADES DEL PRIMER NIVEL. En este caso address no funcionaría la modificacion.
```

- BIEN:

```ts
// PARA QUE FUNCIONE SI O SI:
const spiderman = structuredClone(ironman);
spiderman.firstName = "Peter";
spiderman.lastName = "Parker";
spiderman.age = 22;
```

Los objetos siempre crearlos como constante.

### Interfaces

Para crear un molde y poder crear objetos con él:

```ts
// Interfaces;

export interface Person {
    firstName: string;
    lastName: string;
    age: number;
    address?: Address;
}

interface Address {
    postalCode: string;
    city: string;
}

const ironman: Person = {
    firstName: "Tony",
    lastName: "Stark",
    age: 45,
    address: {
        postalCode: "ABC123",
        city: "New York",
    },
};
```

### Arrays:

```ts
// Se puede crear un array con distintos tipos de datos;
// const myArray: (number | string)[] = [1, 2, 3, 4, 5, 6];
const myArray: number[] = [1, 2, 3, 4, 5, 6];

// Para crear un nuevo array;
const myArray2 = [...myArray]; // Mejor usar un structureClone();

// Añadir
myArray.push(7);

console.log({ myArray, myArray2 });
```

### Postman y APIs

PASOS PARA REALIZAR UNA PETICION APi

**PASO 1:** Crear una APP en la plataforma y generara la API Key (Giphy, Sporify...)
**PASO 2:** Copiar la llave. NUNCA SUBIR AL REPOSITORIO. Para practicar si, en una variable.
**PASO 3:** Abrir Postman, boton +, GET, pegar la URL, pegar la KEY en los Params y darle a SEND.
**PASO 4:** Si ves 200 y mucho JSON, está correcto.
**PASO 5:** Peticion https:

```ts
// 1. DEFINIR LA INTERFAZ:
// Miramos el JSON que nos devolvió Postman y le decimos a TypeScript qué forma tiene.
interface GiphyResponse {
    data: {
        images: {
            original: {
                url: string;
            };
        };
        title: string;
    };
}

// 2. CREAR LA FUNCIÓN ASÍNCRONA:
// Usamos async/await porque la petición a internet toma tiempo y debemos "esperar".
export const fetchRandomGif = async (): Promise<string | null> => {
    // Definimos nuestras variables (Endpoint y Key)
    const apiKey = "MziEkymRhg38U5eblKzxfYSpVFXEWMvd";
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&rating=g`;

    // 3. BLOQUE TRY/CATCH: Obligatorio para manejar errores si se cae el internet o la API falla
    try {
        // Hacemos el "Send" de Postman
        const response = await fetch(url);

        // Comprobamos si nos devolvieron un 200 OK
        if (!response.ok) {
            throw new Error(`¡Error HTTP! Estado: ${response.status}`);
        }

        // Convertimos la respuesta a un objeto JavaScript y le aplicamos nuestra Interfaz
        const data = (await response.json()) as GiphyResponse;

        // Extraemos exactamente el dato que queremos
        const gifUrl = data.data.images.original.url;

        console.log("¡GIF obtenido exitosamente!", gifUrl);
        return gifUrl;
    } catch (error) {
        // Si algo falla, lo atrapamos aquí para que no "pete" la aplicación
        console.error("Ocurrió un error al traer el GIF:", error);
        return null;
    }
};
```

### Async y await:

**Async**
La palabra `async` (asíncrono) se pone justo antes de declarar una función.
Simplemente indicamos que dentro de esta funcion habrán pausas intencionadas (que se marca con `await`) Siempre devuelve una promesa.

EJEMPLOS DE CUANDO USARLO:

- Cuando vas a conectarte a una API externa (como la de Giphy).
- Cuando vas a leer o escribir datos en una base de datos.
- Cuando vas a leer un archivo pesado del disco duro.

```ts
// Sintaxis normal:
async function obtenerDatos() { ... }

// Sintaxis con función flecha (la más usada hoy en día):
const obtenerDatos = async () => { ... }
```

**Await**
Solamente se puede usar dentro de un async.

Se la ponemos única y exclusivamente a fucniones que devuelvan promesas, el await le dice a JS:
_"Pausa la ejecución de esta función exactamente en esta línea hasta que la Promesa se resuelva (o falle), y luego guárdame el resultado real en la variable"._

EJEMPLOS DONDE SIEMPRE HAY AWAIT:

- `fetch()`: Porque ir a internet a buscar datos es incierto y tarda tiempo.
- `response.json()`: Porque convertir un paquete de texto gigante en un objeto de JavaScript manejable también toma tiempo.
- `axios.get()`, `axios.post()`, etc. (Si usas la librería Axios en lugar de fetch).
- Cualquier otra función que tú mismo hayas creado y le hayas puesto async delante.

A qué NO se le pone await:

- A variables normales (`const nombre = "Juan"`).
- A operaciones matemáticas (`const suma = 2 + 2`).
- A un `console.log()`.

EJEMPLO:

```ts
// 1. Ponemos 'async' porque la función va a tardar y usará 'await' dentro
const traerUsuario = async () => {
    console.log("1. Voy a pedir los datos..."); // Esto es instantáneo

    // 2. Ponemos 'await' a fetch porque devuelve una Promesa.
    // JS se pausa aquí hasta que el servidor responda.
    const respuesta = await fetch("https://api.ejemplo.com/usuario");

    // 3. Ponemos 'await' a .json() porque desencriptar la respuesta
    // también lleva tiempo y devuelve otra Promesa.
    const datos = await respuesta.json();

    // Esto se ejecuta cuando lo de arriba termina
    console.log("2. ¡Ya tengo los datos!", datos);

    return datos;
};
```
