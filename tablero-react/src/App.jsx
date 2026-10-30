/*
Componente principal de Estantería Común.

Aquí guardamos el estado de los libros y
las funciones que permiten modificarlos.
*/

// useState permite guardar información que puede cambiar.
import { useState } from "react";

// Componentes de diseño.
import Pagina from "./componentes/layout/Pagina.jsx";
import Panel from "./componentes/comunes/Panel.jsx";

// Componente para mostrar los libros.
import ListaLibros from "./componentes/libros/ListaLibros.jsx";

// Datos iniciales.
import { LIBROS_INICIALES } from "./data/libros.js";

// Función para obtener el siguiente estado de lectura.
import { siguienteEstado } from "./utils/libros.js";

function App() {

    /*
    Creamos una variable de estado llamada libros.

    libros: contiene la lista actual.
    setLibros: permite actualizar esa lista.

    Al iniciar, usamos los datos de libros.js.
    */
    const [libros, setLibros] = useState(LIBROS_INICIALES);

    /*
    Cambia el estado de un libro.

    map() recorre todos los libros.
    Si encuentra el id indicado, crea una copia
    del libro con el siguiente estado.

    Los demás libros quedan iguales.
    */
    function avanzar(id) {

        const librosActualizados = libros.map((libro) => {

            if (libro.id === id) {

                return {
                    ...libro,
                    estado: siguienteEstado(libro.estado)
                };
            }

            return libro;
        });

        // Actualizamos la lista en React.
        setLibros(librosActualizados);
    }

    /*
    Elimina un libro de la lista.

    filter() crea un arreglo nuevo que contiene
    únicamente los libros con un id diferente.
    */
    function quitar(id) {

        const librosActualizados = libros.filter(
            (libro) => libro.id !== id
        );

        setLibros(librosActualizados);
    }

    return (
        <Pagina>

            <h1 className="mb-4">
                Tablero de lecturas
            </h1>

            <Panel titulo="Libros del club">

                {/* Enviamos los datos y funciones mediante props */}
                <ListaLibros
                    libros={libros}
                    onAvanzar={avanzar}
                    onQuitar={quitar}
                />

            </Panel>

            <Panel titulo="Resumen de lecturas">

                <p className="mb-0">
                    Actualmente hay {libros.length} libros en el tablero.
                </p>

            </Panel>

        </Pagina>
    );
}

export default App;