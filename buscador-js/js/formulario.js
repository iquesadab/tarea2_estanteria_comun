/*
Módulo encargado del formulario para proponer libros.
Valida los datos, administra autores y envía la propuesta.
*/

// Elementos principales del formulario.
const formularioPropuesta = document.getElementById("formPropuesta");
const contenedorAutores = document.getElementById("contenedorAutores");
const botonAgregarAutor = document.getElementById("btnAgregarAutor");
const mensajePropuesta = document.getElementById("mensajePropuesta");

// Campos del formulario.
const titulo = document.getElementById("tituloPropuesta");
const anio = document.getElementById("anioPropuesta");
const paginas = document.getElementById("paginasPropuesta");
const genero = document.getElementById("generoPropuesta");
const fecha = document.getElementById("fechaPropuesta");
const correo = document.getElementById("correoPropuesta");
const motivo = document.getElementById("motivoPropuesta");

// Cantidad máxima de autores permitidos.
const MAX_AUTORES = 5;

/*
Obtiene la fecha actual en formato YYYY-MM-DD.
Se utiliza para impedir fechas anteriores a hoy.
*/
function obtenerFechaActual() {

    const hoy = new Date();

    const anioActual = hoy.getFullYear();
    const mesActual = String(hoy.getMonth() + 1).padStart(2, "0");
    const diaActual = String(hoy.getDate()).padStart(2, "0");

    return `${anioActual}-${mesActual}-${diaActual}`;
}

/*
Configura los límites de año y fecha.
*/
function configurarLimites() {

    anio.max = new Date().getFullYear();
    fecha.min = obtenerFechaActual();
}

/*
Muestra un mensaje debajo de un campo inválido.
Utiliza la API de validación de restricciones.
*/
function mostrarError(campo, mensaje) {

    campo.setCustomValidity(mensaje);
    campo.classList.add("is-invalid");

    const contenedor = campo.parentElement;
    const error = contenedor.querySelector(".invalid-feedback");

    if (error) {
        error.textContent = mensaje;
    }
}

/*
Limpia el error de un campo.
*/
function limpiarError(campo) {

    campo.setCustomValidity("");
    campo.classList.remove("is-invalid");

    const contenedor = campo.parentElement;
    const error = contenedor.querySelector(".invalid-feedback");

    if (error) {
        error.textContent = "";
    }
}

/*
Valida un campo y muestra un mensaje personalizado.
*/
function validarCampo(campo) {

    // Limpia mensajes anteriores.
    limpiarError(campo);

    const valor = campo.value.trim();

    // Verifica campos obligatorios.
    if (campo.required && valor === "") {
        mostrarError(campo, "Este campo es obligatorio.");
        return false;
    }

    // Verifica la longitud mínima.
    if (campo.minLength > 0 && valor.length < campo.minLength) {
        mostrarError(
            campo,
            `Debes escribir al menos ${campo.minLength} caracteres.`
        );
        return false;
    }

    // Verifica la longitud máxima.
    if (campo.maxLength > 0 && valor.length > campo.maxLength) {
        mostrarError(
            campo,
            `No puedes superar ${campo.maxLength} caracteres.`
        );
        return false;
    }

    // Verifica el formato del correo.
    if (campo.type === "email" && campo.validity.typeMismatch) {
        mostrarError(campo, "Ingresa un correo electrónico válido.");
        return false;
    }

    // Valida el año de publicación.
    if (campo === anio) {

        const valorAnio = Number(valor);
        const anioActual = new Date().getFullYear();

        if (!Number.isInteger(valorAnio) || valorAnio < 1 || valorAnio > anioActual) {
            mostrarError(
                campo,
                `El año debe estar entre 1 y ${anioActual}.`
            );
            return false;
        }
    }

    // Valida la cantidad de páginas.
    if (campo === paginas) {

        if (!Number.isInteger(Number(valor)) || Number(valor) < 1) {
            mostrarError(campo, "Las páginas deben ser un número mayor que cero.");
            return false;
        }
    }

    // Valida que la fecha no sea anterior a hoy.
    if (campo === fecha && valor < obtenerFechaActual()) {
        mostrarError(campo, "La fecha no puede ser anterior a hoy.");
        return false;
    }

    // Comprueba las demás restricciones HTML5.
    if (!campo.checkValidity()) {
        mostrarError(campo, "Revisa el valor ingresado.");
        return false;
    }

    return true;
}

/*
Crea un nuevo campo para ingresar otro autor.
*/
function agregarCampoAutor() {

    const cantidadAutores =
        contenedorAutores.querySelectorAll("input[name='autores']").length;

    if (cantidadAutores >= MAX_AUTORES) {
        return;
    }

    // Crea el contenedor del nuevo autor.
    const fila = document.createElement("div");
    fila.className = "autor-fila";

    // Crea el campo de texto.
    const campoAutor = document.createElement("input");

    campoAutor.type = "text";
    campoAutor.name = "autores";
    campoAutor.className = "form-control";
    campoAutor.placeholder = `Autor ${cantidadAutores + 1}`;
    campoAutor.required = true;
    campoAutor.maxLength = 100;
    campoAutor.setAttribute(
        "aria-label",
        `Autor ${cantidadAutores + 1}`
    );

    // Crea el botón para quitar el autor.
    const botonQuitar = document.createElement("button");

    botonQuitar.type = "button";
    botonQuitar.className = "btn btn-outline-danger";
    botonQuitar.textContent = "Quitar";
    botonQuitar.dataset.accion = "quitar-autor";

    // Contenedor para mostrar errores.
    const error = document.createElement("div");
    error.className = "invalid-feedback";

    fila.append(campoAutor, botonQuitar, error);
    contenedorAutores.append(fila);

    actualizarBotonAutores();
}

/*
Actualiza la disponibilidad del botón de agregar autores.
*/
function actualizarBotonAutores() {

    const cantidadAutores =
        contenedorAutores.querySelectorAll("input[name='autores']").length;

    botonAgregarAutor.disabled = cantidadAutores >= MAX_AUTORES;
}

/*
Quita un autor adicional.
Siempre debe quedar al menos un campo.
*/
function quitarCampoAutor(boton) {

    const cantidadAutores =
        contenedorAutores.querySelectorAll("input[name='autores']").length;

    if (cantidadAutores <= 1) {
        return;
    }

    boton.closest(".autor-fila").remove();

    actualizarBotonAutores();
}

/*
Muestra alertas de Bootstrap.
*/
function mostrarMensajePropuesta(texto, tipo) {

    mensajePropuesta.replaceChildren();

    const alerta = document.createElement("div");

    alerta.className = `alert alert-${tipo} mt-3`;
    alerta.setAttribute("role", "alert");
    alerta.textContent = texto;

    mensajePropuesta.append(alerta);
}

/*
Valida todos los campos del formulario.
*/
function validarFormulario() {

    const campos = formularioPropuesta.querySelectorAll(
        "input, select, textarea"
    );

    let formularioValido = true;

    campos.forEach((campo) => {

        if (!validarCampo(campo)) {
            formularioValido = false;
        }
    });

    return formularioValido;
}

/*
Envía la propuesta a una API de prueba.
*/
async function enviarPropuesta(datos) {

    const direccion = "https://jsonplaceholder.typicode.com/posts";

    const respuesta = await fetch(direccion, {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify(datos)
    });

    if (!respuesta.ok) {
        throw new Error("No se pudo enviar la propuesta.");
    }

    return await respuesta.json();
}

/*
Reinicia el formulario después de enviarlo correctamente.
*/
function reiniciarFormulario() {

    formularioPropuesta.reset();

    // Elimina los autores adicionales.
    const filasAutores = contenedorAutores.querySelectorAll(".autor-fila");

    filasAutores.forEach((fila, indice) => {

        if (indice > 0) {
            fila.remove();
        }
    });

    // Limpia los mensajes de error.
    const campos = formularioPropuesta.querySelectorAll(
        "input, select, textarea"
    );

    campos.forEach((campo) => {
        limpiarError(campo);
    });

    actualizarBotonAutores();
    configurarLimites();
}

/*
Evento para agregar un autor.
*/
botonAgregarAutor.addEventListener("click", () => {

    agregarCampoAutor();
});

/*
Evento para quitar autores adicionales.
*/
contenedorAutores.addEventListener("click", (evento) => {

    const boton = evento.target.closest(
        "button[data-accion='quitar-autor']"
    );

    if (boton) {
        quitarCampoAutor(boton);
    }
});

/*
Limpia errores mientras el usuario corrige los campos.
*/
formularioPropuesta.addEventListener("input", (evento) => {

    const campo = evento.target;

    if (campo.matches("input, select, textarea")) {
        limpiarError(campo);
    }
});

/*
Valida y envía el formulario.
*/
formularioPropuesta.addEventListener("submit", async (evento) => {

    evento.preventDefault();

    // Verifica que los datos sean correctos.
    if (!validarFormulario()) {

        mostrarMensajePropuesta(
            "Revisa los campos marcados antes de enviar.",
            "danger"
        );

        return;
    }

    // Obtiene los autores ingresados.
    const autores = Array.from(
        contenedorAutores.querySelectorAll("input[name='autores']")
    ).map((campo) => campo.value.trim());

    // Prepara la información para enviar.
    const datos = {

        titulo: titulo.value.trim(),
        autores: autores,
        anio: Number(anio.value),
        paginas: Number(paginas.value),
        genero: genero.value,
        fecha: fecha.value,
        correo: correo.value.trim(),
        motivo: motivo.value.trim()
    };

    // Evita enviar varias veces mientras espera respuesta.
    const botonEnviar = formularioPropuesta.querySelector(
        "button[type='submit']"
    );

    botonEnviar.disabled = true;

    mostrarMensajePropuesta(
        "Enviando propuesta, por favor espera...",
        "info"
    );

    try {

        await enviarPropuesta(datos);

        mostrarMensajePropuesta(
            "La propuesta se envió correctamente.",
            "success"
        );

        reiniciarFormulario();

    } catch (error) {

        console.error("Error al enviar la propuesta:", error);

        mostrarMensajePropuesta(
            "No se pudo enviar la propuesta. Intenta nuevamente.",
            "danger"
        );

    } finally {

        botonEnviar.disabled = false;
    }
});

// Configura los valores iniciales.
configurarLimites();
actualizarBotonAutores();