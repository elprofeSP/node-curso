import { createRequire } from "node:module";
// Crear nuestro propio require
export const require = createRequire(import.meta.url);

// const users = [
//   {
//     id: 1,
//     name: "Jonathan",
//     email: "jonathan@gmail.com",
//   },
//   {
//     id: 1,
//     name: "Angelo",
//     email: "angelo@gmail.com",
//   },
//   {
//     id: 3,
//     name: "Jose",
//     email: "jose@gmail.com",
//   },
// ];

// const usuarioEncontrado = users.find((user) => user.id === 1 );
// console.log(usuarioEncontrado)

// const numeros = [ 2, 7, 6, 8]

// const numeroEncontrado = numeros.find((numero) => numero === 7)
// console.log(numeroEncontrado)
