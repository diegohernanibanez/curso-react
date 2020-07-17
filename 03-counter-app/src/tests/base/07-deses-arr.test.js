import "@testing-library/jest-dom";
const { retornaArreglo } = require('../../base/07-deses-arr');

describe('se prueba 07 deses arr', () => {
    test('retornaArreglo debe retornar un string y un numero', () => {
        const arr = retornaArreglo();

        const [letras, numeros] = arr;  

        expect(arr).toEqual(["ABC", 123]);
        expect(letras).toBe("ABC");
        expect(typeof letras).toBe("string");
        expect(numeros).toBe(123);
        expect(typeof numeros).toBe("number");
    });
    
});
