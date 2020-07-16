
describe('Prubas en el archivo counterApp', () => {
    
    test('deben de ser iguales los strings', () => {
        const msg = "Hola mundo";
    
        const msg2 = `Hola mundo`;
    
        expect(msg).toBe(msg2);
    });
    
})


