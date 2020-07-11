// Objetos literales

const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion:{
        ciudad: 'New York',
        zip: '123456',
    }
};

console.log({persona});

console.table({persona});

const persona2 = persona;
persona2.nombre = 'Peter';

console.log(persona);
console.log(persona2);

const persona3 = { ...persona };
console.log(persona3);



