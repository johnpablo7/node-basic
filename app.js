const { crearArchivo } = require("./helpers/multiplicar");

console.clear();

const [, , arg3 = "base=6"] = process.argv;
const [, base = 6] = arg3.split("=");

// const base = 6;

crearArchivo(base)
  .then((nombreArchivo) => console.log(nombreArchivo, "creado"))
  .catch((err) => console.log(err));
