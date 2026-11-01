/*
Componente FormularioLibro

Permite agregar nuevos libros al tablero.

Utiliza:
- useState para guardar los datos escritos.
- Campos controlados con value y onChange.
- Una función externa para validar.
- Props para enviar el libro nuevo a App.jsx.
*/

import { useState } from "react";

import {
    GENEROS,
    MIEMBROS
} from "../../data/libros.js";

import { validarLibro } from "../../utils/validarLibro.js";

function FormularioLibro({ onAgregar }) {

    // Valores iniciales del formulario.
    const datosIniciales = {
        titulo: "",
        autor: "",
        genero: "",
        miembro: ""
    };

    // Estado que guarda lo escrito en el formulario.
    const [datos, setDatos] = useState(datosIniciales);

    // Estado que guarda los errores de validación.
    const [errores, setErrores] = useState({});

    // Mensaje de confirmación.
    const [mensaje, setMensaje] = useState("");

    /*
    Actualiza el campo que la persona está modificando.

    name indica cuál propiedad cambiar.
    value contiene el nuevo valor.
    */
    function cambiarDato(evento) {

        const { name, value } = evento.target;

        setDatos({
            ...datos,
            [name]: value
        });

        // Quitamos el mensaje anterior al editar.
        setMensaje("");

        // Quitamos el error del campo que se está corrigiendo.
        setErrores({
            ...errores,
            [name]: ""
        });
    }

    /*
    Se ejecuta al enviar el formulario.

    Primero valida los datos.
    Si hay errores, los muestra.
    Si todo está bien, envía el libro a App.jsx.
    */
    function enviarFormulario(evento) {

        // Evita que la página se recargue.
        evento.preventDefault();

        const nuevosErrores = validarLibro(datos);

        setErrores(nuevosErrores);

        // Si hay errores, no agregamos el libro.
        if (Object.keys(nuevosErrores).length > 0) {
            setMensaje("");
            return;
        }

        /*
        Enviamos los datos al componente principal.
        App.jsx agregará el id y el estado inicial.
        */
        onAgregar({
            titulo: datos.titulo.trim(),
            autor: datos.autor.trim(),
            genero: datos.genero,
            miembro: datos.miembro
        });

        // Limpiamos el formulario.
        setDatos(datosIniciales);

        // Limpiamos los errores.
        setErrores({});

        // Mostramos un mensaje de éxito.
        setMensaje("El libro se agregó correctamente.");
    }

    return (
        <form onSubmit={enviarFormulario} noValidate>

            <div className="row g-3">

                {/* Campo del título */}
                <div className="col-12 col-md-6">

                    <label htmlFor="titulo" className="form-label">
                        Título del libro
                    </label>

                    <input
                        type="text"
                        id="titulo"
                        name="titulo"
                        className={`form-control ${
                            errores.titulo ? "is-invalid" : ""
                        }`}
                        value={datos.titulo}
                        onChange={cambiarDato}
                        placeholder="Ejemplo: El principito"
                    />

                    {errores.titulo && (
                        <div className="invalid-feedback">
                            {errores.titulo}
                        </div>
                    )}

                </div>

                {/* Campo del autor */}
                <div className="col-12 col-md-6">

                    <label htmlFor="autor" className="form-label">
                        Autor
                    </label>

                    <input
                        type="text"
                        id="autor"
                        name="autor"
                        className={`form-control ${
                            errores.autor ? "is-invalid" : ""
                        }`}
                        value={datos.autor}
                        onChange={cambiarDato}
                        placeholder="Nombre del autor"
                    />

                    {errores.autor && (
                        <div className="invalid-feedback">
                            {errores.autor}
                        </div>
                    )}

                </div>

                {/* Selección de género */}
                <div className="col-12 col-md-6">

                    <label htmlFor="genero" className="form-label">
                        Género
                    </label>

                    <select
                        id="genero"
                        name="genero"
                        className={`form-select ${
                            errores.genero ? "is-invalid" : ""
                        }`}
                        value={datos.genero}
                        onChange={cambiarDato}
                    >
                        <option value="">
                            Seleccione un género
                        </option>

                        {GENEROS.map((genero) => (
                            <option key={genero} value={genero}>
                                {genero}
                            </option>
                        ))}

                    </select>

                    {errores.genero && (
                        <div className="invalid-feedback">
                            {errores.genero}
                        </div>
                    )}

                </div>

                {/* Selección del miembro */}
                <div className="col-12 col-md-6">

                    <label htmlFor="miembro" className="form-label">
                        Miembro del club
                    </label>

                    <select
                        id="miembro"
                        name="miembro"
                        className={`form-select ${
                            errores.miembro ? "is-invalid" : ""
                        }`}
                        value={datos.miembro}
                        onChange={cambiarDato}
                    >
                        <option value="">
                            Seleccione un miembro
                        </option>

                        {MIEMBROS.map((miembro) => (
                            <option key={miembro} value={miembro}>
                                {miembro}
                            </option>
                        ))}

                    </select>

                    {errores.miembro && (
                        <div className="invalid-feedback">
                            {errores.miembro}
                        </div>
                    )}

                </div>

            </div>

            {/* Botón para agregar */}
            <div className="mt-4">

                <button
                    type="submit"
                    className="btn btn-primary"
                >
                    Agregar libro
                </button>

            </div>

            {/* Mensaje de confirmación */}
            {mensaje && (
                <div
                    className="alert alert-success mt-3 mb-0"
                    role="status"
                >
                    {mensaje}
                </div>
            )}

        </form>
    );
}

export default FormularioLibro;
