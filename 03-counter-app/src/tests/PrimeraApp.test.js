import React from 'react';
import {render} from "@testing-library/react";
import PrimeraApp from "../PrimeraApp";

describe('Pruena en PrimeraApp', () => {
    test('debe mostrar "Hola Mundo"', () => {
        const saludo = 'Hola Mundo';

        const {getByText} = render(<PrimeraApp saludo = {saludo} />);
        
        expect(getByText(saludo)).toBeInTheDocument();
    })
    
})
