
/*
Módulo encargado de administrar la lista de lecturas.
Permite agregar libros, cambiar estados y eliminarlos.
*/

// Arreglo donde guardamos los libros agregados.
let listaLecturas = [];

// Elementos HTML de la lista.
const tablaLecturas = document.getElementById("tablaLecturas");
const mensajeLecturas = document.getElementById("mensajeLecturas");

// Estados disponibles para cada libro.
const estados = ["Pendiente", "Leyendo", "Leído"];

/*
Obtiene el identificador de un libro.
Open Library proporciona una clave única para cada obra.
*/
function obtenerIdLibro(libro) {
    return libro.key;
}

/*
Muestra u oculta el mensaje de lista vacía.
*/
function actualizarMensaje() {

    mensajeLecturas.hidden = listaLecturas.length > 0;
}

/*
Crea una celda de la tabla con texto.
*/
function crearCelda(texto) {

    const celda = document.createElement("td");

    celda.textContent = texto;

    return celda;
}

/*
Crea una fila para mostrar un libro.
*/
function crearFilaLectura(libro) {

    const fila = document.createElement("tr");

    fila.dataset.id = libro.id;
    fila.classList.add("lectura-entrada");

    // Columna del título.
    const celdaTitulo = crearCelda(libro.titulo);

    // Columna del autor.
    const celdaAutor = crearCelda(libro.autor);

    // Columna para cambiar el estado.
    const celdaEstado = document.createElement("td");

    const selectorEstado = document.createElement("select");

    selectorEstado.className = "form-select form-select-sm";
    selectorEstado.dataset.accion = "cambiar-estado";
    selectorEstado.setAttribute(
        "aria-label",
        `Estado de lectura de ${libro.titulo}`
    );

    estados.forEach((estado) => {

        const opcion = document.createElement("option");

        opcion.value = estado;
        opcion.textContent = estado;

        if (estado === libro.estado) {
            opcion.selected = true;
        }

        selectorEstado.append(opcion);
    });

    celdaEstado.append(selectorEstado);

    // Columna de acciones.
    const celdaAcciones = document.createElement("td");

    const botonEliminar = document.createElement("button");

    botonEliminar.type = "button";
    botonEliminar.className = "btn btn-outline-danger btn-sm";
    botonEliminar.textContent = "Quitar";
    botonEliminar.dataset.accion = "eliminar";

    celdaAcciones.append(botonEliminar);

    fila.append(
        celdaTitulo,
        celdaAutor,
        celdaEstado,
        celdaAcciones
    );

    return fila;
}

/*
Vuelve a mostrar los libros de la lista.
*/
function mostrarLecturas() {

    tablaLecturas.replaceChildren();

    const fragmento = document.createDocumentFragment();

    listaLecturas.forEach((libro) => {

        const fila = crearFilaLectura(libro);

        fragmento.append(fila);
    });

    tablaLecturas.append(fragmento);

    actualizarMensaje();
}

/*
Agrega un libro a la lista.
No permite libros duplicados.
*/
function agregarLectura(libro) {

    const id = obtenerIdLibro(libro);

    // Verifica que el libro tenga un identificador.
    if (!id) {
        mostrarAviso("No se pudo identificar el libro.", "danger");
        return;
    }

    // Busca si el libro ya fue agregado.
    const existe = listaLecturas.some((lectura) => lectura.id === id);

    if (existe) {
        mostrarAviso("Este libro ya está en tu lista de lecturas.", "warning");
        return;
    }

    // Crea un objeto con los datos necesarios.
    const nuevaLectura = {
        id: id,
        titulo: libro.title || "Sin título",
        autor: libro.author_name?.join(", ") || "Desconocido",
        estado: "Pendiente"
    };

    listaLecturas.push(nuevaLectura);

    mostrarLecturas();

    mostrarAviso("Libro agregado a tu lista de lecturas.", "success");
}

/*
Muestra un aviso utilizando Bootstrap.
*/
function mostrarAviso(texto, tipo) {

    const aviso = document.createElement("div");

    aviso.className = `alert alert-${tipo} mt-3`;
    aviso.setAttribute("role", "alert");
    aviso.textContent = texto;

    // El aviso se coloca debajo de la tabla.
    mensajeLecturas.before(aviso);

    // Se elimina automáticamente después de unos segundos.
    setTimeout(() => {
        aviso.remove();
    }, 3500);
}

/*
Cambia el estado de un libro.
*/
function cambiarEstado(id, nuevoEstado) {

    // Verifica que el estado sea válido.
    if (!estados.includes(nuevoEstado)) {
        return;
    }

    const libro = listaLecturas.find((lectura) => lectura.id === id);

    if (!libro) {
        return;
    }

    libro.estado = nuevoEstado;

    // Aplica nuevamente la animación a la fila modificada.
    const fila = Array.from(tablaLecturas.rows).find(
        (elemento) => elemento.dataset.id === id
    );

    if (fila) {

        fila.classList.remove("lectura-entrada");

        // Reinicia la animación CSS.
        void fila.offsetWidth;

        fila.classList.add("lectura-entrada");
    }
}


/*
Elimina un libro de la lista.
Primero actualiza los datos y luego anima la fila.
*/
function eliminarLectura(id, fila) {

    // Evita eliminar dos veces la misma fila.
    if (fila.classList.contains("lectura-salida")) {
        return;
    }

    // Elimina el libro del arreglo inmediatamente.
    listaLecturas = listaLecturas.filter(
        (libro) => libro.id !== id
    );

    // Quita la animación de entrada.
    fila.classList.remove("lectura-entrada");

    // Activa la animación de salida.
    fila.classList.add("lectura-salida");

    // Espera a que termine la transición visual.
    fila.addEventListener("animationend", (evento) => {

        // Solo responde a la transición de opacidad de la fila.
        if (evento.target !== fila || evento.animationName !== "desaparecer") {
            return;
        }

        // Elimina completamente la fila del HTML.
        fila.remove();

        // Actualiza el mensaje de lista vacía.
        actualizarMensaje();

        mostrarAviso("Libro eliminado de la lista.", "info");

    }, { once: true });
}


/*
Escucha el evento enviado desde renderizado.js
cuando el usuario presiona "Agregar a lecturas".
*/
document.addEventListener("agregarLectura", (evento) => {

    agregarLectura(evento.detail);
});

/*
Delegación de eventos:
Una sola escucha para todos los botones de eliminar.
*/
tablaLecturas.addEventListener("click", (evento) => {

    const boton = evento.target.closest("button[data-accion='eliminar']");

    if (!boton) {
        return;
    }

    // Evita acciones no deseadas en elementos contenedores.
    evento.stopPropagation();

    const fila = boton.closest("tr");

    if (!fila) {
        return;
    }

    eliminarLectura(fila.dataset.id, fila);
});

/*
Una sola escucha para los cambios de estado.
*/
tablaLecturas.addEventListener("change", (evento) => {

    const selector = evento.target.closest(
        "select[data-accion='cambiar-estado']"
    );

    if (!selector) {
        return;
    }

    evento.stopPropagation();

    const fila = selector.closest("tr");

    if (!fila) {
        return;
    }

    cambiarEstado(fila.dataset.id, selector.value);
});

// Muestra el estado inicial de la lista.
mostrarLecturas();