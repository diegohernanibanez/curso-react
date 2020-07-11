import heroes from '../data/heroes';
// const {heroes} = require('./data/heroes');
// console.log(owner);

const getHeroeById = (id) => heroes.find((heroe) => heroe.id === id);

// console.log(getHeroeById(2));

const getHeroesByOwner = (owner) => heroes.filter((heroe) => heroe.owner === owner);

// console.log(getHeroesByOwner('DC'));
// console.log(getHeroesByOwner('Marvel'));

export {getHeroeById, getHeroesByOwner};
