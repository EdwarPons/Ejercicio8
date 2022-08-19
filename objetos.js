const misDatos = {
 nombre: "Edwar Frank",
 apellido: "Pons Bessio",
 edad: 42,
 altura: 163,
 esDesarrolador: true,
};

console.log(misDatos);

let miEdad = misDatos.edad;
console.log(miEdad);

const misDatosArray = [misDatos];
console.log(misDatosArray);

const misAmigos = [
 {
  nombre: "Germán",
  apellido: "Zapata",
  edad: 39,
  altura: 165,
  esDesarrolador: false,
 },
 {
  nombre: "Juan",
  apellido: "Valenzuela",
  edad: 42,
  altura: 162,
  esDesarrolador: false,
 },
];

console.log(misAmigos);

const todosJuntos = [...misDatosArray, ...misAmigos].sort((a, b) => b.edad - a.edad);
console.log(todosJuntos);
