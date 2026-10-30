import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// Importa Bootstrap instalado mediante npm.
import "bootstrap/dist/css/bootstrap.min.css";

// Importa los estilos propios del proyecto.
import "./estilos.css";

// Importa el componente principal.
import App from "./App.jsx";

// Muestra la aplicación React dentro del elemento root.
createRoot(document.getElementById("root")).render(
    <StrictMode>
        <App />
    </StrictMode>
);
