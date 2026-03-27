# REACT - Curso Udemy

---

## SECCION 1: Introduccion.

- VSCode.
- NodeJS.
- Postman. (Crear cuenta)
- Warp
- Docker

---

## SECCION 2: Introduccion a React y conceptos generales.

### ¿Que es React?

- Antes de React estaba JavaScript puro o jQuery.

- React: Librería para construir interfaces de usuario para crear interfaces mas complejas.

- Usa JSX, una extension de sintaxis de JavaScript (luce como HTML pero es JavaScript).

- Componente, es una funcion que devuelve un html. Estructura Componentes:

1. Creamos una funcion.
2. Retornamos un HTML (Corchetes de JavaScript).
3. Opcional. Creamos una pieza de estado usando un Hook (importamos el hook)
4. Opcional. Creamos una funcion controladora

```JavaScript
import { useState } from 'react';
export function Counter(){ // 1
    const [count, setCount] = useState(0); // 3

    const handleClick => () { // 4
        setCount(count + 1);
    };

    return( // 2
        <div>
            <p>Has hecho click {count} veces</p>
            <button onClick={handleClick}>Click</button>
        </div>
    )
}
```

### Puntos importantes de React.

- Es una herramienta específica para resolver un problema en concreto.
- No impone reglas estrictas sobre como estructurar tu aplicacion.

LIBRERíAS vs FRAMEWORKS:

- Sistema de rutas (cambiar de página a página)
- Peticiones HTTP
- Herramientas usar.

Si lo usamos como librería, nosotros decidimos como hacerlo y configurarlo.
Si lo usamos como framework, el framework nos marca como usar React.

La documentacion oficial. Recomienda usar Vite, Parcel o RSBuild. Usaremos Vite. Tenemos que instalar las dependencias conforme vayamos usandolo.

Trabajaremos REACT como una librería y con TypeScript

### Comandos extra React:

COMPONENTE Header.jsx:

**escribir tsrafce** (Acrónimo de: TypeScript React Arrow Function Component with Export)

```tsx
import React from "react";

type Props = {};

const Header = (props: Props) => {
    return <div>Header</div>;
};

export default Header;
```

Sin tipado fuerte, **escribir rafce**

```tsx
import React from "react";

const Header = () => {
    return <div>Header</div>;
};

export default Header;
```

---

## SECCION 4: Primeros pasos con React

### Primer Proyecto en React, Pasos:

1. Crear directorio donde irá el proyecto.
2. Crear entorno vite: `npm create vite`
3. Crearlo con React, Typescript SWC.
4. Instalar dependencias `npm install` (se instala por defecto si se lo dices).
5. Correr el entorno `npm run dev` (lo hace por defecto si se lo dices)
6. `Cntr+c` para salir, `npm run dev` para volver a entrar

### Directorios.

La gran parte de los archivos del root son archivos de configuración.

- Vite Config: Archivo de configuracion de vite, le decimos que etamos trabajando con React y si necesitamos otra tecnología pues la configuramos.
- SWC: Compilador mucho más rápido que Babel.
- tsconfig: El normal .json es el archivo de configuración de typescript
- tsconfig.app: Configuracion de la parte de la app.
- tsconfic.node: Configuracion de la parte de node.
- README: Documentacion del proyecto.
- package.json: Toda la informacion del proyecto, scripts de como queremos que funcionen, las dependencias de desarrollo y de producción.

- index.html: Titulo de nuestra app, y punto de entrada de la app
- node modules: Dependencias de las dependencias. No tocar los módulos del node. No se sube al repositorio. Si se borra, `hacer npm install`
- Carpeta public, archivos estáticos, imagenes, fuentes...
- src: Donde trabajaremos. Directorio flexible, cualquier tipo de arquitectura que queramos usar.
  -src/.tsx: Archivos de React con typescript.

### Componentes

Importante que cada componente únicamente regrese un único elemento.

ESTRUCTURA DE UN COMPONENTE:

```tsx
// FUNCION FLECHA
export const MyAwesomeApp = () => {
    return (
        // FRAGMENTO
        <>
            <h1>Jaime</h1>
            <h3>Olucha</h3>
        </>
    );
};

// FUNCION NORMAl
export function MyAwesomeApp() {
    return (
        // FRAGMENTO
        <>
            <h1>Jaime</h1>
            <h3>Olucha</h3>
        </>
    );
}
```

Los fragmentos deben estar envueltos simepre por un formato bloque:

- `<></>`
- `<Fragment><Fragment/>`
- `<div><div/>`

### Impresión de variables:

```tsx
// IMPORTANTE TENER NUESTRAS VARIABLES FUERA DE NUESTRO COMPONENTE
const name = "Jaime";
const lastName = "Olucha";

const favoriteGames = ["Smash", "Metal Gear", "Fifa"];
const isActive = true;

const address = {
    zipCode: "ABC-123",
    country: "Canada",
};

export const MyAwesomeApp = () => {
    return (
        <>
            {/* Las llaves es la union entre js y html*/}
            <h1>{name}</h1>
            <h3>{lastName}</h3>

            <p>{favoriteGames.join(", ")}</p>

            {/*Los valores buleanos no muestran nada en pantalla*/}
            <h1>{isActive}</h1>

            <h1>{isActive ? "Activo" : "No Activo"}</h1>

            {/*NO SE PUEDE IMPRIMIR POR DEFECTO UN OBJETO*/}
            {/* <p>{address}</p>  ESTO DA ERROR*/}

            {/* SI QUEREMOS IMPRIMIR UN OBJETO CON UN STRING: */}
            <p>{JSON.stringify(address)}</p>
        </>
    );
};
```

### Estilos en CSS:

Muchas formas de hacer estilos (aparte del archivo externo de CSS QUE ES LO QUE HAY QUE HACER).

DESDE LA PROPIA ETIQUETA:

```tsx
<p
    style={{
        // CAMEL CASE PARA ESTILOS DE CSS CON TSX Y JSX
        backgroundColor: isActive ? "green" : "red",
        borderRadius: 10,
        padding: 10,
    }}
>
    {JSON.stringify(address)}
</p>
```

IMPORTANDOLO DESDE FUERA:

```tsx
const myStyles: CSSProperties = {
    // TIPO CSS, INTERZAF PARA TENER AYUDA DE INTELIJ
    // CAMEL CASE PARA ESTILOS DE CSS CON TSX Y JSX
    backgroundColor: isActive ? "green" : "red",
    borderRadius: 10,
    padding: 10,
};

<p style={myStyles}>{JSON.stringify(address)}</p>;

// PARA SABER DE QUE TIPO ES (:CSSProperties) PASAR EL CURSOR POR style= Y NOS LO DICE
```

### Propiedades React

Son valores o funciones que se envían al componente, deben de ser inmutables y permiten la personalización.

```tsx
interface Props {
    firstName: string;
}

const Greeting = ({ firstName }: Props) => {
    return <h1>Hola, {firstName}!</h1>;
};

// Usando el componente
<Greeting firstName="Fernando" />;
```

### Mostrar listado de elementos.

En vez de crear varias lineas modificando a mano la propiedad de esta manera:

```tsx
    <ItemCounter name="Nintendo Switch 2" quantity={1} />
    <ItemCounter name="Pro Controller" quantity={2} />
    <ItemCounter name="Super Smash" quantity={3} />
```

Mejor crear un objeto donde ahí apliquemos los "nuevos productos" o ampliaciones de las nuevas cosas que hagamos, de la siguiente manera:

```tsx
// CREAMOS UNA INTERFAZ
interface ItemInCard {
    productName: string;
    quantity: number;
}

// LUEGO CREAMOS UN ARRAY DE TIPO DE LA INTERFAZ
const itemsInCart: ItemInCard[] = [
    { productName: "Nintendo Switch 2", quantity: 1 },
    { productName: "Pro Controller", quantity: 2 },
    { productName: "Super Smash", quantity: 5 },
    { productName: "Super Smash 2", quantity: 5 },
];

// HACEMOS UN MAP DONDE NOS CREA OTRO ARRAY RECORRIENDO EL ORIGINAL
{
    itemsInCart.map(({ productName, quantity }) => (
        <ItemCounter key={productName} name={productName} quantity={quantity} />
        // IMPORTANTE, DEBE TENER UN KEY, NUNCA PONER INDEX COMO KEY
    ));
}
```

### Eventos

Todos los eventos empiezan con on... onClick, onMouseEnter, onBlur...

```tsx
const handleClick = () => {
    console.log(`Click ${name}`);
};

<button onClick={handleClick}>+1</button>;
```

### useSate
Es un hook donde podemos manejar el estado local de un componente.

```tsx
// CONTADOR
export const ItemCounter = ({ name, quantity = 0 }: Props) => {
    // AQUI SIEMPRE VAN LOS HOOKS
    const [count, setCount] = useState(quantity);

    const handleAdd = () => {
        setCount(count + 1);
    };

    const handleSubstract = () => {
        if (count == 0) return;
        setCount(count - 1);
    };
```

### Archivos CSS

Antes de nada intentemos tener un orden en las importaciones:

```tsx
// 1. Importaciones de React.
// 2. Importaciones de terceros.
// 3. Importaciones personalizadas.
// 4. Importaciones de CSS
```

CSS: Nos creamos un archivo .css por cada componente con el mismo nombre que el componente:
```tsx
// ItemCounter.css
.item-row {
    display: flex;
    align-items: "center";
    gap: 10px;
    margin-top: 10px;

}

.item-text {
    width: 150px;
}


// ItemCounter.tsx
import "./ItemCounter.css";
<section className="item-row" // PONEMOS className en vez de class


// SI QUEREMOS CALCULAR LO PODEMOS HACER EN EL PROPIO TSX:
    style={{
        color: count == 0 ? "red" : "black",
    }}
```

Tambien está la forma de hacerlo por modulos de css, que debe nombrarse con la palabra module

```tsx
//ItemCounter.module.css
.item-row {
    display: flex;
    align-items: "center";
    gap: 10px;
    margin-top: 10px;

}

.item-text {
    width: 150px;
}

// ItemCounter.tsx:

//TENEMOS QUE PONER styles from
import styles from "./ItemCounter.module.css";

// SE LLAMA ASí A LAS CLASES:
    className={styles["item-row"]}
```

https://github.com/DevTalles-corp/react-first-steps 

---

## SECCIÓN  5: Pruebas automáticas - Unit testing
En esta sección inicial de testing, aprenderemos muchas cosas útiles para nuestro camino a la hora de realizar pruebas automáticas.

Puntualmente veremos:

- Vitest / Vitest UI
- Índice de cobertura
- Describe y Test
- Espías
- Mock / Mock sobre componentes
- Depuración en consola
- Snapshots
- Esperar argumentos específicos en funciones
- Integración con Testing Library

Es una sección que puede sentirse abrumadora, pero deja las bases de todo lo que necesitamos para probar aplicaciones de React y código de JavaScript/TypeScript

### TESTING

Pruebas automáticas, unitarias, integracion, E2E - End to End.

**UNITARIAS**
1. Pruebas atómicas simples.
2. Se recomienda no tener dependencias de otros componentes. (DIP)
3. Debe de ser especializada en la pieza que estamos probando

**INTEGRACION**
1. ¿Como funcionan elementos en conjunto?
2. No deben de ser mayores a las unitarias

**END to END**
1. Un flujo aislado.
2. Objetivo específico
3. Prubeas de casos improbables.

**CARACTERISTICAS DE PRUBAS AUTOMATICAS**
1. Facil de escribir.
2. Facil de leer
3. Rápidas
4. Flexibles
5. Unitarias

**TRIPLE A**
- *Arreglar*
  - Importaciones
  - Inicializaciones
  
- *Actuar*
  - Aplicar estímulo.
  - Llamar metodos
  - Simular Clicks

- *Afirmar*
  - Que debe de haber sucedido

 
1. Hacen que mi aplicacion no tenga errores.
2. Las pruebas no pueden fallar.
3. Hacen mas lenta mi app.
4. Es una pérdida de tiempo
5. Hay que probarlo todo.

El codigo de las pruebas nunca llega a producción

**COBERTURA**
- Cobertura de lineas: porcentaje de lineas ejecutadas.
- Cobertura de ramas: Porcentaje de ramas de decision probadas.
- Cobertura de funciones: Porcentaje de funciones invocadas.
- Cobertura de condiciones: Porcentaje de condiciones evaluadas en ambos sentidos.

### Configuracion de vitest

Para poder hacer pruebas de vitest, tenemos que instalar los paquetes `npm install -D vitest`

Actualizar nuestros scripts del package:
```json
    "test": "vitest",
    "test:ui": "vitest --ui",
    "coverage": "vitest run --coverage"
```

### Test de prueba
Creamos el archivo para simular la prueba:

```ts
export const add = (a: number, b: number) => {
    return a + b;
}
export const substract = (a: number, b: number) => {
    return a - b;
}
export const multiply = (a: number, b: number) => {
    return a * b;
}
export const divide = (a: number, b: number) => {
    return a / b;
}
```

Creamos un archivo para hacer las pruebas (DEBE ACABAR EN .test)
```ts

// POR LO MENOS DEBE TENER UNA PRUEBA
import { expect, test } from 'vitest'
import { add } from './math.helper';

test('should add two positive numbers', () => {

    // ! 1. Arrange
    const a = 1;
    const b = 2;

    // ! 2. Act
    const result = add(a, b)

    // ! 3. Assert
    expect(result).toBe(a + b);

})
```
EJECUTAMOS LA TRIPLE A DE ESA MANERA ↑, USAMOS expect() de vitest en vez de trow new error.

PARA AGRUPAR TEST usamos `describe`:

```ts
// POR LO MENOS DEBE TENER UNA PRUEBA

import { expect, test, describe } from 'vitest'
import { add, substract, multiply } from './math.helper';

// Agrupador de pruebas
describe('substract', () => {
    test('should substract two positive numbers', () => {

        const a = 1;
        const b = 2;

        const result = substract(a, b)

        expect(result).toBe(a - b);
    });

    test('should substract two negative numbers', () => {

        const a = -5;
        const b = -10;

        const result = substract(a, b)

        expect(result).toBe(a - b);
    });
});
```

### Pruebas sobre componenetes de React
DESCARGAR DE https://testing-library.com/docs/react-testing-library/intro 
`npm install --save-dev @testing-library/react @testing-library/dom`


```tsx
import { describe, test } from "vitest";
import { render, screen } from "@testing-library/react";

import { MyAwesomeApp } from "./MyAwesomeApp";

describe("MyAwesomeApp", () => {
    test("shold render firstName and lastname", () => {
        render(<MyAwesomeApp />);

        screen.debug();
    });
});

describe("MyAwesomeApp", () => {
    test("shold render firstName and lastname", () => {
        /*Primera Forma*/ const { container } = render(<MyAwesomeApp />);

        const h1 = container.querySelector("h1");
        expect(h1?.innerHTML).toContain("Jaime");

        const h3 = container.querySelector("h3");
        expect(h3?.innerHTML).toContain("Olucha");
    });
    test("shold render firstName and lastname - screen", () => {
        render(<MyAwesomeApp />);
        /* Segunda Forma */screen.debug();

        // const h1 = screen.getByRole("heading", {
        //     level: 1,
        // });

        const h1 = screen.getByTestId("first-name-title");
        console.log(h1.innerHTML);
    });

    // SI ES UN RENDER NORMAL USAR EL CONTAINER PERO ACOSTUMBRARSE AL SCREEN
});
```

### Evaluar snapshots
```tsx
    // SNAPSHOT FOTOGRAFIA DE LA ESTRUCTURA DE ESE MOMENTO
    test("should match snapshot", () => {
        const { container } = render(<MyAwesomeApp />);

        expect(container).toMatchSnapshot();
    });

    // SE CREA UNA CARPETA __snapshots__ con captura del codigo html de la fotografía
    // SI SE CAMBIA EL CODIGO DE ORDEN; SALTA ERROR (si queremos, pulsar u para actualizar)
```

PROBAR SIEMPRE LO MÁS FACIL Y MAS PEQUEÑO E IR CRECIENDO

58. Disparador Eventos
https://github.com/DevTalles-corp/react-first-steps/tree/fin-seccion-05 


## SECCIÓN 6: Aplicacion de Gifs animados;
En esta sección comenzaremos a trabajar de una forma estructurada React, que nos permita escalar proyectos y empezar a dejar el pensamiento de que necesitamos la separación en componentes pequeños fáciles de reutilizar y probar.

- Peticiones HTTP
- Debounce
- Manejo de estado
- Comunicación entre componentes
- useEffect
- Variables de entorno
- Fuentes personalizadas
- Entre otras cosas.

La idea principal es dejar las bases de cómo podemos trabajar aplicaciones en React que nos permitan crecer y reutilizar su contenido a futuro.

https://github.com/DevTalles-corp/react-ts-gifs/tree/fin-seccion-06 

---

## SECCIÓN 7: Optimización y despliegue;

En esta sección aprenderemos mucho sobre cómo funciona React, puntualmente veremos:

1. Custom Hooks - Hooks personalizados
2. DevTools de React
3. useRef - Hook propio de React
4. Generar versión de producción
5. Separación de responsabilidades

Esta es una sección muy importante porque marca el antes y el después de cómo trabajar en React, ya que los custom hooks son lo que usaremos de aquí en adelante para evitar aglomerar los componentes con demasiada lógica.

### CUSTOM HOOKS

Forma de personalizar tu propio hook, se debe empezar por use, evita repetir código.