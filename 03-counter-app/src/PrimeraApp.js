// import React, { Fragment } from 'react';

// const PrimeraApp = () => {
//     return (
//         <Fragment>
//             <h1>Hola Mundo</h1>
//             <p>Mi primera app de React</p>
//         </Fragment>
//     );
// }

import React from 'react';
import PropTypes from 'prop-types';

const PrimeraApp = ({saludo}) => {
    
    // const numeros = 123;
    // const decimales = 123.123;
    // const boolean = true;
    // const arreglo = [1, 2, 3, 4, 5, 6];
    // const objeto = {
    //     nombre: 'Diego',
    //     edad: 26,
    // }
    //Se puede retornar con <div></div> o se puede retornar con <></>
    return (
        <>
            <h1>{saludo}</h1>
            <p>Mi primera app de React</p>
            {/* <h1>{numeros}</h1>
            <h1>{decimales}</h1>
            <h1>{boolean}</h1>
            <h1>{arreglo}</h1>
            <pre>{JSON.stringify(objeto, null, 3)}</pre> */}
        </>
    );
}

PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired,
}

export default PrimeraApp;