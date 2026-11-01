/*
Valida la información ingresada en el formulario
para agregar un libro al tablero.
*/

export function validarLibro(datos) {

    const errores = {};

    // Validamos que el título no esté vacío.
    if (!datos.titulo.trim()) {
        errores.titulo = "Debes escribir el título del libro.";
    }

    // Validamos que tenga al menos 2 caracteres.
    else if (datos.titulo.trim().length < 2) {
        errores.titulo = "El título debe tener al menos 2 caracteres.";
    }

    // Verifica que se indique un autor.
    if (!datos.autor.trim()) {
        errores.autor = "Debes escribir el nombre del autor.";
    }

    // Verifica que se seleccione un género.
    if (!datos.genero) {
        errores.genero = "Debes seleccionar un género.";
    }

    // Verifica que se seleccione un miembro del club.
    if (!datos.miembro) {
        errores.miembro = "Debes seleccionar un miembro.";
    }

    return errores;
}