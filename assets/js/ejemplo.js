const nombres = [
  "Juan",
  "María",
  "Pedro",
  "Ana",
  "Luis",
  "Laura",
  "Diego",
  "Marta",
  "Carlos",
  "Sofía",
];

function generarNombreAleatorio() {
  const nombre = nombres[Math.floor(Math.random() * nombres.length)];
  return `${nombre}`;
}

console.log(generarNombreAleatorio()); // Ejemplo de uso: "Juan García"
