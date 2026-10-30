/*
Componente que organiza el contenido principal.
La prop children permite mostrar otros componentes dentro.
*/

import Encabezado from "./Encabezado.jsx";

function Pagina({ children }) {

    return (
        <>
            <Encabezado />

            <main className="container py-4">
                {children}
            </main>

            <footer className="text-center text-muted py-4">
                <p className="mb-0">
                    Estantería Común - Club de lectura
                </p>
            </footer>
        </>
    );
}

export default Pagina;