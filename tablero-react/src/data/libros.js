/*
Datos iniciales del tablero de lecturas.
Estos libros se utilizan para mostrar información
desde que se abre la aplicación.
*/

// Estados disponibles para cada libro.
export const ESTADOS = ["Pendiente", "Leyendo", "Leído"];

// Personas que forman parte del club de lectura.
export const MIEMBROS = [
    "Ana",
    "Carlos",
    "María",
    "Pedro"
];

// Géneros disponibles.
export const GENEROS = [
    "Novela",
    "Fantasía",
    "Misterio",
    "Romance",
    "Ciencia ficción",
    "Historia",
    "Otro"
];

// Lista inicial de libros.
export const LIBROS_INICIALES = [
    {
        id: 1,
        titulo: "Cien años de soledad",
        autor: "Gabriel García Márquez",
        genero: "Novela",
        miembro: "Ana",
        estado: "Pendiente"
    },
    {
        id: 2,
        titulo: "Harry Potter y la piedra filosofal",
        autor: "J. K. Rowling",
        genero: "Fantasía",
        miembro: "Carlos",
        estado: "Leyendo"
    },
    {
        id: 3,
        titulo: "El principito",
        autor: "Antoine de Saint-Exupéry",
        genero: "Novela",
        miembro: "María",
        estado: "Leído"
    },
    {
        id: 4,
        titulo: "Orgullo y prejuicio",
        autor: "Jane Austen",
        genero: "Romance",
        miembro: "Pedro",
        estado: "Pendiente"
    },
    {
        id: 5,
        titulo: "1984",
        autor: "George Orwell",
        genero: "Ciencia ficción",
        miembro: "Ana",
        estado: "Leyendo"
    }
];