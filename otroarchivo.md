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
