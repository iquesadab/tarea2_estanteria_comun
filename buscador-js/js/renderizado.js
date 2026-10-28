/*
Archivo encargado de mostrar los libros
obtenidos desde Open Library.
*/

// Crea un elemento HTML con texto.
function crearElemento(etiqueta, clase, texto) {

    const elemento = document.createElement(etiqueta);

    if (clase) {
        elemento.className = clase;
    }

    if (texto !== undefined) {
        elemento.textContent = texto;
    }

    return elemento;
}

/*
Obtiene la dirección de la portada.
Si el libro no tiene portada, devuelve null.
*/
function obtenerPortada(libro) {

    if (!libro.cover_i) {
        return null;
    }

    return `https://covers.openlibrary.org/b/id/${libro.cover_i}-M.jpg`;
}

/*
Crea la tarjeta de un libro.
*/
function crearTarjetaLibro(libro) {

    const tarjeta = crearElemento("article", "tarjeta-libro");

    // Portada o mensaje alternativo.
    const direccionPortada = obtenerPortada(libro);

    const imagen = document.createElement("img");

    imagen.src = direccionPortada || "img/Sin portada.svg";

    imagen.alt = direccionPortada
        ? `Portada de ${libro.title || "libro"}`
        : "Imagen alternativa del libro";

    imagen.className = "portada-libro";
    imagen.loading = "lazy";

    // Si la imagen de Open Library falla, usa la alternativa.
    imagen.addEventListener("error", () => {

        if (!imagen.src.endsWith("/img/sin-portada.svg")) {
            imagen.src = "img/Sin portada.svg";
        }

    });

    tarjeta.append(imagen);

    // Contenido de la tarjeta.
    const contenido = crearElemento("div", "contenido-libro");

    const titulo = crearElemento(
        "h3",
        "",
        libro.title || "Sin título"
    );

    const autores = crearElemento(
        "p",
        "",
        `Autor: ${libro.author_name?.join(", ") || "Desconocido"}`
    );

    const anio = crearElemento(
        "p",
        "",
        `Primera publicación: ${libro.first_publish_year || "No disponible"}`
    );

    // Contenedor de botones.
    const acciones = crearElemento("div", "acciones-libro");

    const botonDetalle = crearElemento(
        "button",
        "btn btn-outline-primary btn-sm",
        "Ver detalles"
    );

    botonDetalle.type = "button";

    botonDetalle.addEventListener("click", () => {
        mostrarDetalleLibro(libro);
    });

    const botonAgregar = crearElemento(
        "button",
        "btn btn-primary btn-sm",
        "Agregar a lecturas"
    );

    botonAgregar.type = "button";

    // El evento será utilizado por lecturas.js.
    botonAgregar.addEventListener("click", () => {

        document.dispatchEvent(
            new CustomEvent("agregarLectura", {
                detail: libro
            })
        );

    });

    acciones.append(botonDetalle, botonAgregar);

    contenido.append(titulo, autores, anio, acciones);

    tarjeta.append(contenido);

    return tarjeta;
}

/*
Muestra las tarjetas de los libros encontrados.
*/
export function mostrarLibros(libros) {

    const contenedor = document.getElementById("resultadosLibros");

    // Elimina los resultados de una búsqueda anterior.
    contenedor.replaceChildren();

    // Crea las tarjetas dentro de un fragmento.
    const fragmento = document.createDocumentFragment();

    libros.forEach((libro) => {

        const tarjeta = crearTarjetaLibro(libro);

        fragmento.append(tarjeta);

    });

    contenedor.append(fragmento);
}

/*
Muestra los detalles de un libro
en el modal de Bootstrap.
*/
function mostrarDetalleLibro(libro) {

    const tituloModal = document.getElementById("tituloModalLibro");
    const contenidoModal = document.getElementById("contenidoModalLibro");

    tituloModal.textContent = libro.title || "Sin título";

    contenidoModal.replaceChildren();

    const autores = crearElemento(
        "p",
        "",
        `Autores: ${libro.author_name?.join(", ") || "Desconocidos"}`
    );

    const anio = crearElemento(
        "p",
        "",
        `Primera publicación: ${libro.first_publish_year || "No disponible"}`
    );

    const ediciones = crearElemento(
        "p",
        "",
        `Cantidad de ediciones: ${libro.edition_count ?? "No disponible"}`
    );

    const idiomas = crearElemento(
        "p",
        "",
        `Idiomas registrados: ${libro.language?.join(", ") || "No disponibles"}`
    );

    contenidoModal.append(autores, anio, ediciones, idiomas);

    // Abre el modal mediante Bootstrap.
    const elementoModal = document.getElementById("modalLibro");

    const modal = bootstrap.Modal.getOrCreateInstance(elementoModal);

    modal.show();
}