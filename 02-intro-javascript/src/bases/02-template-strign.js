
// Template strings

const nombre = 'Fernando';
const apellido = 'Herrera';

// const nombreCompleto = nombre + ' ' + apellido;

const nombreCompleto = `Hola ${nombre} ${apellido}.
Puedo agregar otra linea
${ 1 + 1 }
`;

console.log(nombreCompleto);

function getSaludo(arg) {
    return 'Hola Mundo ' + arg;
}

console.log(`${getSaludo(nombre)}`);
