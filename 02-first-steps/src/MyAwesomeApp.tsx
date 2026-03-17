import type { CSSProperties } from "react";

// IMPORTANTE TENER NUESTRAS VARIABLES FUERA DE NUESTRO COMPONENTE
const name = "Jaime";
const lastName = "Olucha";

const favoriteGames = ["Smash", "Metal Gear", "Fifa"];
const isActive = true;

const address = {
    zipCode: "ABC-123",
    country: "Canada",
};

const myStyles: CSSProperties = {
    // TIPO CSS, INTERZAF PARA TENER AYUDA DE INTELIJ
    // CAMEL CASE PARA ESTILOS DE CSS CON TSX Y JSX
    backgroundColor: isActive ? "green" : "red",
    borderRadius: 10,
    padding: 10,
};

export const MyAwesomeApp = () => {
    return (
        <div>
            {/* Las llaves es la union entre js y html*/}
            <h1 data-testid="first-name-title">{name}</h1>
            <h3>{lastName}</h3>

            <p className="mi-clase-favorita">{favoriteGames.join(", ")}</p>

            {/*Los valores buleanos no muestran nada en pantalla*/}
            <h1>{isActive}</h1>

            <h1>{isActive ? "Activo" : "No Activo"}</h1>

            {/*NO SE PUEDE IMPRIMIR POR DEFECTO UN OBJETO*/}
            {/* <p>{address}</p>  ESTO DA ERROR*/}

            {/* SI QUEREMOS IMPRIMIR UN OBJETO CON UN STRING: */}
            <p style={myStyles}>{JSON.stringify(address)}</p>
        </div>
    );
};
