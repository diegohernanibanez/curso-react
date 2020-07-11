// Desestructuracion de objetos
// Asignacion desesctructurante

const persona = {
    nombre: "Tony",
    edad: 45,
    username: "Ironman",
}

// const {nombre, edad: edad2, username: user} = persona;

// console.log(nombre);
// console.log(edad2);
// console.log(user);

// const retornaPersona = (usuario) => {
//     const {nombre, rango = 'Capitan'} = usuario;
//     console.log(nombre, rango);
// };

const useContext = ({username, nombre, rango = 'Capitan', edad}) => {
    // console.log(nombre, rango);
    return {
        clave: username,
        anios: edad,
        latlng: {
            lat: 12.123123,
            lng: -12.12123,
        }
    }
};

const {clave, anios, latlng: {lat, lng}} = useContext(persona);


console.log(clave, anios, lat, lng)