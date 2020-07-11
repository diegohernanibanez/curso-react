// Funciones en JS

// No es recomendable crear funciones de esta manera porque
// la "variable" saludar contiene la referencia a la funcion
// y si le asignamos un valor pisamos a la funcion

// function saludar(nombre){
//     return `Hola, ${nombre}`;
// }

// // saludar = 30;

// console.log(saludar("Diego"));
// console.log(saludar) retornaria 30

const saludar2 = (nombre) => {
    return `Hola, soy ${nombre}`
}

const saludar3 = (nombre) => `Hola, soy ${nombre}`

const saludar4 = () => `Hola mundo`

console.log(saludar2("Goku"));
console.log(saludar3("Vegeta"));
console.log(saludar4());


const getUser = () => ({
        uid: '123',
        user: 'pablitoclavo',
});

console.log(getUser());

// Transformar la siguiente funcion en arrow function
// debe devolver un obj implicito

// function getUsuario(nombre){
//     return {
//         uid: '345',
//         username: nombre,
//     }
// }

// const usuarioActivo = getUsuario("Spiderman");

// console.log(usuarioActivo);

const getUsuario = (nombre) => ({
    uid: '345',
    username: nombre,
})
const usuarioActivo = getUsuario('Spiderman');

console.log(usuarioActivo);