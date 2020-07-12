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

const PrimeraApp = ({saludo, subtitulo}) => {
    
    //Se puede retornar con <div></div> o se puede retornar con <></>
    return (
        <>
            <h1>{saludo}</h1>
            <p>{subtitulo}</p>
        </>
    );
}

PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired,
}

PrimeraApp.defaultProps = {
    subtitulo: 'Mi primera app'
}


export default PrimeraApp;