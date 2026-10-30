/*
Componente que muestra el encabezado del tablero.
Utiliza la barra de navegación de Bootstrap.
*/

function Encabezado() {

    return (
        <header>
            <nav className="navbar navbar-dark bg-primary">
                <div className="container">

                    <span className="navbar-brand mb-0 h1">
                        📚 Estantería Común
                    </span>

                    <span className="text-white">
                        Club de lectura
                    </span>

                </div>
            </nav>
        </header>
    );
}

export default Encabezado;