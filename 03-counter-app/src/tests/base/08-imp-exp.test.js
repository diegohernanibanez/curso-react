import "@testing-library/jest-dom"
import heroes from "../../data/heroes";
import '@testing-library/jest-dom';
const {getHeroeById, getHeroesByOwner} = require("../../base/08-imp-exp")



describe('se prueba 08 imp ext', () => {
    test('getHeroeById debe retornar un heroe cuando encuentra id', () => {
        const id = 1;      
        const heroe = getHeroeById(id);
        const hereoData = heroes.find(aHero => aHero.id === id);

        expect(heroe).toEqual(hereoData);
    });
    
    test('getHeroeById debe retornar undefined cuando no encuentra id', () => {
        const id = 6;      
        const heroe = getHeroeById(id);

        expect(heroe).toBe(undefined);
    });

    test('getHeroesByOwner debe retornar un arreglo con los heroes de DC', () => {
        const owner = 'DC';
        const heroesByOwner = getHeroesByOwner(owner);
        const heroesData = heroes.filter(aHero => aHero.owner === owner);
        expect(heroesByOwner).toEqual(heroesData);
    });

    test('getHeroesByOwner debe retornar el tamaño de un arreglo con los heroes de Marval', () => {
        const owner = 'Marvel';
        const heroesByOwner = getHeroesByOwner(owner);
        expect(heroesByOwner.length).toBe(2);
    });
    
    

});

