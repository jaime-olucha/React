import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { GifsApp } from "./GifsApp";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <GifsApp />
    </StrictMode>,
);

// Idealmente, crear componente del nombre de la aplicacion. para trabajarlo ahí en vez del main
