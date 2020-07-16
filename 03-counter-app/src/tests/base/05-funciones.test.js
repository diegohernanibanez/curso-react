import '@testing-library/jest-dom'
const { getUser, getUsuarioActivo } = require("../../base/05-funciones");


describe('Se hacen pruebas en 05 funciones', () => {
    test('getUser debe retornar el objeto userTest', () => {
        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };

        const user = getUser();

        expect(user).toEqual(userTest);
    });
    

    test('getUsuarioActivo debe retornar el objeto userTest con el nombre que se le envia por parametros', () => {
        const nombre = 'Diego'
        const userTest = {
            uid: 'ABC567',
            username: nombre
        };

        const user = getUsuarioActivo(nombre);

        expect(user).toEqual(userTest);
    });
})
