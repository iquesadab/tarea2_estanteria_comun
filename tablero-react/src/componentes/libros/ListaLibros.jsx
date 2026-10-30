/*
Componente que muestra la lista de libros.

Recibe:
- libros: arreglo de libros.
- onAvanzar: función para cambiar estados.
- onQuitar: función para eliminar libros.
*/

import TarjetaLibro from "./TarjetaLibro.jsx";

function ListaLibros({ libros, onAvanzar, onQuitar }) {

    // Si no hay libros, mostramos un mensaje.
    if (libros.length === 0) {
        return (
            <div className="alert alert-info mb-0">
                No hay libros para mostrar.
            </div>
        );
    }

    return (
        <div className="row g-3">

            {/* Recorremos el arreglo para crear una tarjeta por libro */}
            {libros.map((libro) => (

                <div
                    className="col-12 col-md-6 col-lg-4"
                    key={libro.id}
                >

                    <TarjetaLibro
                        libro={libro}
                        onAvanzar={onAvanzar}
                        onQuitar={onQuitar}
                    />

                </div>

            ))}

        </div>
    );
}

export default ListaLibros;