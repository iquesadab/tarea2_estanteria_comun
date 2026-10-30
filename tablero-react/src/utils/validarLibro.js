/*
Valida la información ingresada en el formulario
para agregar un libro al tablero.
*/

export function validarLibro(datos) {

    const errores = {};

    // Verifica que el título no esté vacío.
    if (!datos.titulo.trim()) {
        errores.titulo = "Debes escribir el título del libro.";
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