import React from 'react';
import CounterApp from '../CounterApp';
import {shallow} from 'enzyme';

describe('Prubas en el archivo counterApp', () => {
    
    let wrapper = shallow(<CounterApp />);

    beforeEach(() => {
        wrapper = shallow(<CounterApp />);
    });

    test('debe mostrar CounterApp correctamente', () => {

        expect(wrapper).toMatchSnapshot(); 
    });

    test('debe mostrar el CounterApp con valor por defecto 100', () => {

        const valor = 100;

        const wrapper = shallow(<CounterApp value = {valor} />);

        const valorMostrado = wrapper.find('h2').text().trim();
        
        expect(valorMostrado).toBe(valor.toString());
    });

    test('debe incrementar el contador al tocar +1', () => {

        wrapper.find('button').at(0).simulate('click');

        const valorMostrado = wrapper.find('h2').text().trim();

        expect(valorMostrado).toBe('1')
    });
    
    test('debe decrementar el contador al tocar -1', () => {

        wrapper.find('button').at(2).simulate('click');

        const valorMostrado = wrapper.find('h2').text().trim();

        expect(valorMostrado).toBe('-1');
    });

    test('debe cambiar al valor por defecto al tocar reset', () => {
        
        const valor = 105;

        const wrapper = shallow(<CounterApp value = {valor} />);

        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(0).simulate('click');

        wrapper.find('button').at(1).simulate('click');

        const valorMostrado = wrapper.find('h2').text().trim();

        expect(valorMostrado).toBe(valor.toString());
    });
    
    
});


