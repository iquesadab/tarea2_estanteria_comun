/*
Componente que muestra la información de un libro.

Recibe por props:
- libro: contiene los datos del libro.
- onAvanzar: función para cambiar su estado.
- onQuitar: función para eliminarlo.
*/

// Importamos la función que devuelve la clase CSS del estado.
import { claseEstado } from "../../utils/libros.js";

function TarjetaLibro({ libro, onAvanzar, onQuitar }) {

    return (
        <article className="card h-100 shadow-sm">

            <div className="card-body d-flex flex-column">

                {/* Título del libro */}
                <h3 className="h5 card-title">
                    {libro.titulo}
                </h3>

                {/* Información del libro */}
                <p className="mb-1">
                    <strong>Autor:</strong> {libro.autor}
                </p>

                <p className="mb-1">
                    <strong>Género:</strong> {libro.genero}
                </p>

                <p className="mb-3">
                    <strong>Miembro:</strong> {libro.miembro}
                </p>

                {/* Estado actual del libro */}
                <div className="mb-3">
                    <span className={`badge ${claseEstado(libro.estado)}`}>
                        {libro.estado}
                    </span>
                </div>

                {/* Botones para modificar el libro */}
                <div className="d-flex gap-2 mt-auto">

                    <button
                        type="button"
                        className="btn btn-primary btn-sm"
                        onClick={() => onAvanzar(libro.id)}
                    >
                        Cambiar estado
                    </button>

                    <button
                        type="button"
                        className="btn btn-outline-danger btn-sm"
                        onClick={() => onQuitar(libro.id)}
                    >
                        Eliminar
                    </button>

                </div>

            </div>

        </article>
    );
}

export default TarjetaLibro;