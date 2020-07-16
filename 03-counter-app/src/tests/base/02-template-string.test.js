const { getSaludo } = require("../../base/02-template-string");
import '@testing-library/jest-dom';

describe('Prueabas en 02 template string', () => {
    test('getSaludo debe retornar Hola Diego', () => {
        const nombre = 'Diego';

        const saludo = getSaludo(nombre);
        expect(saludo).toBe('Hola ' + nombre);
    });

    test('getSaludo debe retornar Hola Carlos si no recibe argumentos en nombre', () => {

        const saludo = getSaludo();
        expect(saludo).toBe('Hola Carlos');
    });
    
})
