/*
Funciones auxiliares para trabajar con los libros.
*/

// Devuelve el siguiente estado de lectura.
export function siguienteEstado(estadoActual) {

    if (estadoActual === "Pendiente") {
        return "Leyendo";
    }

    if (estadoActual === "Leyendo") {
        return "Leído";
    }

    // Si ya está leído, vuelve a pendiente.
    return "Pendiente";
}

// Devuelve una clase CSS según el estado del libro.
export function claseEstado(estado) {

    if (estado === "Pendiente") {
        return "estado-pendiente";
    }

    if (estado === "Leyendo") {
        return "estado-leyendo";
    }

    return "estado-leido";
}