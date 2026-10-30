/*
Componente principal de la aplicación.
Por ahora muestra la estructura inicial del tablero.
*/

import Pagina from "./componentes/layout/Pagina.jsx";
import Panel from "./componentes/comunes/Panel.jsx";

function App() {

    return (
        <Pagina>

            <h1 className="mb-4">
                Tablero de lecturas
            </h1>

            <Panel titulo="Libros del club">

                <p className="mb-0">
                    Aquí aparecerán los libros del club de lectura.
                </p>

            </Panel>

            <Panel titulo="Resumen de lecturas">

                <p className="mb-0">
                    Aquí aparecerá el resumen de los estados.
                </p>

            </Panel>

        </Pagina>
    );
}

export default App;