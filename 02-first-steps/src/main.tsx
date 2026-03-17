import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { FirstStepsApp } from "./FirstStepsApp";
// import { MyAwesomeApp } from "./MyAwesomeApp";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        {/* // MODO ESTRICTO: Nos permite asegurar que la aplicacion funciona como es devido. (NO SE QUITA) */}
        <FirstStepsApp />
        {/* <MyAwesomeApp /> */}
    </StrictMode>,
);
