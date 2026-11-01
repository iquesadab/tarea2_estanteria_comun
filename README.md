# Estantería Común

Tarea 2 - Programación Web Avanzada

## Descripción

Estantería Común es una aplicación para buscar libros,
organizar lecturas y compartir propuestas dentro de
un club de lectura.

El proyecto se divide en dos partes:

- Parte A: aplicación con JavaScript, Bootstrap y Sass.
- Parte B: tablero de lecturas desarrollado con React.

## Tecnologías utilizadas

- HTML5 y CSS3
- JavaScript
- Bootstrap 5
- Sass
- React
- Vite
- npm

## Parte A - Buscador JavaScript

La carpeta `buscador-js` contiene una aplicación que
permite buscar libros utilizando Open Library.

También incluye una lista de lecturas con estados,
un formulario para proponer libros y validaciones.

Se utilizaron eventos, manipulación del DOM,
Fetch API, Bootstrap y estilos personalizados con Sass.

### Ejecución

1. Abrir la carpeta `buscador-js` en VS Code.
2. Ejecutar `npm install`.
3. Ejecutar `npm run sass` para compilar los estilos.
4. Abrir `index.html` con Live Server.

## Parte B - Tablero React

La carpeta `tablero-react` contiene un tablero de
lecturas con datos iniciales locales.

Permite:

- Mostrar los libros del club.
- Filtrar por estado y miembro.
- Cambiar el estado de lectura.
- Eliminar libros.
- Agregar libros con validaciones.
- Consultar un resumen dinámico.

La información se administra mediante useState,
props y componentes reutilizables.

### Ejecución

1. Abrir una terminal dentro de `tablero-react`.
2. Ejecutar `npm install`.
3. Ejecutar `npm run dev`.
4. Abrir la dirección local que muestra Vite.

## Evidencias

La carpeta `docs` contiene evidencias de depuración,
pruebas de red y comparación de Lazy Loading.

## Consideraciones

La Parte B utiliza datos locales y el estado de React.
Los cambios no se guardan al actualizar el navegador.

## Comparación: JavaScript DOM vs. React

En la Parte A trabajé directamente con el DOM.
Por ejemplo, en `buscador-js/js/renderizado.js`
se crean y modifican elementos HTML utilizando
JavaScript para mostrar los resultados de búsqueda.

También utilicé eventos para responder a las acciones
de los botones y actualizar la lista de lecturas.

En cambio, en la Parte B utilicé React.
En `tablero-react/src/App.jsx` guardé los libros
mediante useState y creé funciones para agregarlos,
eliminarlos y cambiar sus estados.

Los componentes `ListaLibros.jsx` y `TarjetaLibro.jsx`
reciben información mediante props y muestran los
libros utilizando map().

La principal diferencia que encontré es que, con
JavaScript tradicional, debo indicar directamente
qué elementos de la página se crean o modifican.

Con React, actualizo el estado y React se encarga
de reflejar los cambios en la pantalla.

Ambas formas permiten crear aplicaciones interactivas,
pero React facilita dividir la interfaz en componentes
reutilizables y mantener organizada la información.
