# Estantería Común
**Proyecto del curso SOFT-12 — Desarrollo Web Full Stack.**  
**Estudiante:** Ivannia Quesada Bogantes  
**Sección:** SCV2  
**Periodo:** III cuatrimestre 2026  
**Docente:** Álvaro Cordero Peña

**Tarea 2**

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

## Historial de commits

La siguiente tabla muestra los commits realizados durante
el desarrollo de la Tarea 2, incluyendo las funcionalidades,
correcciones y documentación del proyecto.


## Historial de commits

La siguiente tabla muestra los commits realizados durante el desarrollo del proyecto, ordenados desde el primero hasta el último.

| N.º | Hash | Fecha | Mensaje del commit | Descripción del cambio |
|---|---|---|---|---|
| 1 | 620fdf1 | 2026-10-13 | Initial commit | Creación inicial del repositorio. |
| 2 | 0c2334a | 2026-10-13 | [new]: Crea estructura inicial de carpetas y archivos de la Tarea 2 | Organización inicial de las carpetas y archivos del proyecto. |
| 3 | 2ee24ee | 2026-10-14 | [new]: Configura Bootstrap y Sass con estilos personalizados | Instalación y configuración de Bootstrap y Sass. |
| 4 | 4c5625d | 2026-10-23 | [new]: Crea interfaz principal del buscador de libros | Desarrollo de la estructura visual de la Parte A. |
| 5 | bd1ccc7 | 2026-10-27 | [new]: Implementa búsqueda de libros con Open Library | Integración de la API y visualización de resultados. |
| 6 | bac7d36 | 2026-10-27 | [fix]: Agrega imagen alternativa para libros sin portada | Incorporación de una portada alternativa cuando no existe imagen. |
| 7 | 3310a66 | 2026-10-27 | [new]: Implementa lista de lecturas interactiva | Funciones para agregar, cambiar estados y eliminar lecturas. |
| 8 | c02d034 | 2026-10-28 | [new]: Implementa formulario de propuestas de libros | Formulario con campos dinámicos y validaciones. |
| 9 | 594cd60 | 2026-10-28 | [docs]: Documenta depuración y optimización del buscador | Evidencias de depuración y comparación de Lazy Loading. |
| 10 | cbb7869 | 2026-10-29 | [new]: Prepara estructura del tablero con React | Configuración inicial de React, Vite y Bootstrap. |
| 11 | 4d7914e | 2026-10-30 | [new]: Agrega datos iniciales y utilidades de libros | Datos locales, estados, géneros y funciones auxiliares. |
| 12 | 3038633 | 2026-10-30 | [new]: Crea componentes de diseño del tablero | Componentes Encabezado, Pagina y Panel. |
| 13 | 27b1430 | 2026-10-30 | [new]: Muestra libros y permite cambiar su estado | Tarjetas de libros, useState, cambio de estados y eliminación. |
| 14 | cee76bf | 2026-10-31 | [new]: Agrega filtros resumen y formulario React | Filtros combinados, resumen dinámico y formulario con validaciones. |
| 15 | 66cc2cc | 2026-11-01 | [fix]: Corrige errores de contraste en la Parte A | Ajustes de colores Sass para mejorar la accesibilidad. |
| 16 | bd092e4 | 2026-11-01 | [docs]: Completa documentación y revisión final | Actualización del README y documentación del proyecto. |
| 17 | d2c6ecc | 2026-11-01 | [docs]: Agrega historial completo de commits al README. |