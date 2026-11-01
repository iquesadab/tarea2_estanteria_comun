/*
Componente Filtros

Permite filtrar los libros por:
- Estado de lectura.
- Miembro del club.

Los valores se reciben desde App.jsx mediante props.
*/

import { ESTADOS, MIEMBROS } from "../../data/libros.js";

function Filtros({
    filtroEstado,
    filtroMiembro,
    onCambiarEstado,
    onCambiarMiembro
}) {

    return (
        <div className="row g-3">

            {/* Filtro por estado */}
            <div className="col-12 col-md-6">

                <label
                    htmlFor="filtroEstado"
                    className="form-label"
                >
                    Filtrar por estado
                </label>

                <select
                    id="filtroEstado"
                    className="form-select"
                    value={filtroEstado}
                    onChange={(evento) =>
                        onCambiarEstado(evento.target.value)
                    }
                >
                    <option value="Todos">
                        Todos los estados
                    </option>

                    {ESTADOS.map((estado) => (
                        <option key={estado} value={estado}>
                            {estado}
                        </option>
                    ))}

                </select>

            </div>

            {/* Filtro por miembro */}
            <div className="col-12 col-md-6">

                <label
                    htmlFor="filtroMiembro"
                    className="form-label"
                >
                    Filtrar por miembro
                </label>

                <select
                    id="filtroMiembro"
                    className="form-select"
                    value={filtroMiembro}
                    onChange={(evento) =>
                        onCambiarMiembro(evento.target.value)
                    }
                >
                    <option value="Todos">
                        Todos los miembros
                    </option>

                    {MIEMBROS.map((miembro) => (
                        <option key={miembro} value={miembro}>
                            {miembro}
                        </option>
                    ))}

                </select>

            </div>

        </div>
    );
}

export default Filtros;