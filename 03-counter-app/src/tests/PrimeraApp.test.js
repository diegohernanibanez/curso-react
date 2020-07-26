import React from 'react';
// import {render} from "@testing-library/react";
import PrimeraApp from "../PrimeraApp";
import {shallow} from 'enzyme';

describe('Pruena en PrimeraApp', () => {
    // test('debe mostrar "Hola Mundo"', () => {
    //     const saludo = 'Hola Mundo';

    //     const {getByText} = render(<PrimeraApp saludo = {saludo} />);
        
    //     expect(getByText(saludo)).toBeInTheDocument();
    // })
    
    test('debe mostrar PrimeraApp correctamente', () => {
        const saludo = 'Hola Mundo';
        const wrapper = shallow(<PrimeraApp saludo = {saludo} />);

        expect(wrapper).toMatchSnapshot();
    })
    
    test('debe mostrar el subtitulo enviado por props', () => {
        const saludo = 'Hola Mundo';
        const sub = 'Subtituleishon';
        const wrapper = shallow(
            <PrimeraApp 
                saludo = {saludo} 
                subtitulo = {sub}
            />
        );
        
        const textoParrafo = wrapper.find('p').text();
        expect(textoParrafo).toBe(sub);
    })
    
})
