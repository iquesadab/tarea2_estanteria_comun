/*
Componente principal de Estantería Común.

Responsabilidades:
- Guardar la lista de libros con useState.
- Guardar los filtros seleccionados.
- Agregar nuevos libros.
- Cambiar estados de lectura.
- Eliminar libros.
- Enviar datos y funciones a los componentes.
*/

import { useState } from "react";

// Componentes generales.
import Pagina from "./componentes/layout/Pagina.jsx";
import Panel from "./componentes/comunes/Panel.jsx";

// Componentes del tablero.
import ListaLibros from "./componentes/libros/ListaLibros.jsx";
import Filtros from "./componentes/filtros/Filtros.jsx";
import Resumen from "./componentes/resumen/Resumen.jsx";
import FormularioLibro from "./componentes/formulario/FormularioLibro.jsx";

// Datos iniciales y funciones auxiliares.
import { LIBROS_INICIALES } from "./data/libros.js";
import { siguienteEstado } from "./utils/libros.js";

function App() {

    /*
    ESTADOS DE REACT

    libros: lista actual del tablero.
    filtroEstado: estado seleccionado.
    filtroMiembro: miembro seleccionado.
    */

    const [libros, setLibros] = useState(LIBROS_INICIALES);

    const [filtroEstado, setFiltroEstado] = useState("Todos");

    const [filtroMiembro, setFiltroMiembro] = useState("Todos");

    /*
    FUNCIÓN AGREGAR

    Recibe los datos del formulario.
    Crea un libro nuevo con:
    - Un identificador único dentro de esta sesión.
    - Estado inicial Pendiente.

    Después agrega el libro a un arreglo nuevo.
    */
    function agregar(datos) {

        // Buscamos el id mayor para evitar repetirlo.
        const mayorId = libros.reduce(
            (mayor, libro) => Math.max(mayor, libro.id),
            0
        );

        const nuevoLibro = {
            id: mayorId + 1,
            ...datos,
            estado: "Pendiente"
        };

        // Creamos un arreglo nuevo sin modificar el anterior.
        setLibros([...libros, nuevoLibro]);
    }

    /*
    FUNCIÓN AVANZAR

    Cambia el estado del libro indicado.
    Utilizamos map() para crear un arreglo actualizado.
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

        setLibros(librosActualizados);
    }

    /*
    FUNCIÓN QUITAR

    Elimina el libro seleccionado utilizando filter().
    */
    function quitar(id) {

        const librosActualizados = libros.filter(
            (libro) => libro.id !== id
        );

        setLibros(librosActualizados);
    }

    /*
    FILTRADO DE LIBROS

    Primero comprobamos el estado.
    Después comprobamos el miembro.

    Si el filtro dice "Todos", no limita los resultados.
    */
    const librosFiltrados = libros.filter((libro) => {

        const coincideEstado =
            filtroEstado === "Todos" ||
            libro.estado === filtroEstado;

        const coincideMiembro =
            filtroMiembro === "Todos" ||
            libro.miembro === filtroMiembro;

        return coincideEstado && coincideMiembro;
    });

    return (
        <Pagina>

            <h1 className="mb-4">
                Tablero de lecturas
            </h1>

            {/* Resumen general de todos los libros */}
            <Panel titulo="Resumen de lecturas">

                <Resumen libros={libros} />

            </Panel>

            {/* Controles para filtrar los libros */}
            <Panel titulo="Filtrar libros">

                <Filtros
                    filtroEstado={filtroEstado}
                    filtroMiembro={filtroMiembro}
                    onCambiarEstado={setFiltroEstado}
                    onCambiarMiembro={setFiltroMiembro}
                />

            </Panel>

            {/* Lista que responde a los filtros seleccionados */}
            <Panel titulo="Libros del club">

                <p className="text-muted">
                    Mostrando {librosFiltrados.length} de {libros.length} libros.
                </p>

                <ListaLibros
                    libros={librosFiltrados}
                    onAvanzar={avanzar}
                    onQuitar={quitar}
                />

            </Panel>

            {/* Formulario para agregar libros nuevos */}
            <Panel titulo="Agregar un libro">

                <FormularioLibro onAgregar={agregar} />

            </Panel>

        </Pagina>
    );
}

export default App;