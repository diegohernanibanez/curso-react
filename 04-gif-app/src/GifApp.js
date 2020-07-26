import React, { useState } from 'react';



const GifApp = () => {

    const [categories, setCategories] = useState(['Elemento1', 'Elemento2', 'Elemento3']);

    const handleAdd = () => {
        setCategories([...categories, 'Elemento4']);
    };

    return (
        <>
            <h2>Gif App</h2>
            <hr />
            <button onClick = {handleAdd}>Agregar</button>
            <ol>
                {
                    categories.map((category) => {
                        return <li key = {category}>{category}</li>
                    })
                }
            </ol>
        </>
    );
}

export default GifApp;