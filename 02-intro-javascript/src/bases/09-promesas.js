import {getHeroeById} from './bases/08-imp-exp'

// const promesa = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const heroe = getHeroeById(2);
//         resolve(heroe);       
//         // reject("No se encontro el heroe");
//     }, 2000);
// });

// promesa.then((unHeroe) => {
//     console.log(unHeroe);
// }).catch((error) => {
//     console.warn(error)
// });

const getHeroeByIdAsync = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const heroe = getHeroeById(id);
            if(heroe !== undefined){
                resolve(heroe);
            }else{
                reject("No se encontro el heroe");
            }
        }, 2000);
    });}

getHeroeByIdAsync(8)
.then(unHeroe => console.log("Heroe: ", unHeroe))
.catch(err => console.warn(err));
// .catch(console.warn);

