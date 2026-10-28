
import { buscarLibros } from "./api.js";
import { mostrarLibros } from "./renderizado.js";
// Activa los eventos de la lista de lecturas.
import "./lecturas.js";

// Elementos del formulario.
const formulario = document.getElementById("formBusqueda");
const campoBusqueda = document.getElementById("textoBusqueda");
const mensajeBusqueda = document.getElementById("mensajeBusqueda");
const contenedorResultados = document.getElementById("resultadosLibros");

// Muestra un mensaje al usuario.
function mostrarMensaje(texto, tipo = "info") {

    mensajeBusqueda.replaceChildren();

    const alerta = document.createElement("div");

    alerta.className = `alert alert-${tipo}`;
    alerta.textContent = texto;

    mensajeBusqueda.append(alerta);
}

// Escucha el envío del formulario.
formulario.addEventListener("submit", async (evento) => {

    // Evita que la página se recargue.
    evento.preventDefault();

    const texto = campoBusqueda.value.trim();

    // Valida que se haya ingresado una búsqueda.
    if (texto.length < 2) {

        mostrarMensaje(
            "Ingresa al menos dos caracteres para buscar.",
            "warning"
        );

        return;
    }

    // Limpia resultados anteriores.
    contenedorResultados.replaceChildren();

    // Informa que la búsqueda está en proceso.
    mostrarMensaje("Buscando libros, por favor espera...", "info");

    try {

        const libros = await buscarLibros(texto);

        // Verifica si la búsqueda no obtuvo resultados.
        if (libros.length === 0) {

            mostrarMensaje(
                "No se encontraron libros con ese criterio.",
                "warning"
            );

            return;
        }

        // Muestra las tarjetas.
        mostrarLibros(libros);

        // Limpia el mensaje de carga.
        mensajeBusqueda.replaceChildren();

    } catch (error) {

        mostrarMensaje(
            "Ocurrió un problema al consultar los libros. Intenta nuevamente.",
            "danger"
        );

    }

});
