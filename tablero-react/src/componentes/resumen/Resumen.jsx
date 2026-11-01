/*
Componente Resumen

Recibe la lista de libros y calcula:
- Total de libros.
- Libros pendientes.
- Libros leyendo.
- Libros leídos.

El resumen cambia automáticamente cuando
se agrega, elimina o modifica un libro.
*/

function Resumen({ libros }) {

    // Cantidad total de libros.
    const total = libros.length;

    // Contamos los libros de cada estado.
    const pendientes = libros.filter(
        (libro) => libro.estado === "Pendiente"
    ).length;

    const leyendo = libros.filter(
        (libro) => libro.estado === "Leyendo"
    ).length;

    const leidos = libros.filter(
        (libro) => libro.estado === "Leído"
    ).length;

    return (
        <div className="row g-3 text-center">

            {/* Total */}
            <div className="col-6 col-lg-3">
                <div className="resumen-tarjeta">
                    <p className="resumen-numero">{total}</p>
                    <p className="mb-0">Total</p>
                </div>
            </div>

            {/* Pendientes */}
            <div className="col-6 col-lg-3">
                <div className="resumen-tarjeta">
                    <p className="resumen-numero">{pendientes}</p>
                    <p className="mb-0">Pendientes</p>
                </div>
            </div>

            {/* Leyendo */}
            <div className="col-6 col-lg-3">
                <div className="resumen-tarjeta">
                    <p className="resumen-numero">{leyendo}</p>
                    <p className="mb-0">Leyendo</p>
                </div>
            </div>

            {/* Leídos */}
            <div className="col-6 col-lg-3">
                <div className="resumen-tarjeta">
                    <p className="resumen-numero">{leidos}</p>
                    <p className="mb-0">Leídos</p>
                </div>
            </div>

        </div>
    );
}

export default Resumen;
