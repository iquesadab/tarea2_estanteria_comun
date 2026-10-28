
/*
Función para buscar libros en Open Library.
Recibe el texto ingresado por el usuario.
*/
export async function buscarLibros(texto) {

    const direccion =
        `https://openlibrary.org/search.json?q=${encodeURIComponent(texto)}&limit=12`;

    try {

        const respuesta = await fetch(direccion);

        // Verifica que la petición haya sido exitosa.
        if (!respuesta.ok) {
            throw new Error("No se pudieron obtener los libros.");
        }

        // Convierte la respuesta JSON a un objeto de JavaScript.
        const datos = await respuesta.json();

        return datos.docs;

    } catch (error) {

        console.error("Error al buscar libros:", error);

        // Envía el error al archivo que llamó esta función.
        throw error;
    }
}