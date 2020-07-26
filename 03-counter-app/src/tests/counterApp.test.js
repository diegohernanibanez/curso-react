import React from 'react';
import CounterApp from '../CounterApp';
import {shallow} from 'enzyme';

describe('Prubas en el archivo counterApp', () => {
    
    test('deben de ser iguales los strings', () => {
        const msg = "Hola mundo";
    
        const msg2 = `Hola mundo`;
    
        expect(msg).toBe(msg2);
    });

    test('debe mostrar CounterApp correctamente', () => {
        const wrapper = shallow(<CounterApp />);

        expect(wrapper).toMatchSnapshot(); 
    });

    test('debe mostrar el CounterApp con valor por defecto 100', () => {
        const valor = 100;

        const wrapper = shallow(<CounterApp value = {valor} />);

        const valorMostrado = wrapper.find('h2').text().trim();
        
        expect(valorMostrado).toBe(valor.toString());
    })
    
    
});


