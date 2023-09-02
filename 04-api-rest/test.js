// indices(index)    0         1         2         3         4
const nombres = [
  {
    id: 123,
    name: "Angelo",
  },
  {
    id: 4324,
    name: "Jose",
  },
  {
    id: 213,
    name: "Dairon",
  },
  {
    id: 6879,
    name: "Brayan",
  },
];
const indiceEstudiante = nombres.findIndex((nombre) => nombre.id === 124877324899);
console.log(indiceEstudiante);

// console.log(nombres[-1])
const elementosEliminados = nombres.splice(-1, 1);

console.log(elementosEliminados);
console.log(nombres);
