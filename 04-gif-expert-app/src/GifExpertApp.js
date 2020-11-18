import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['X-men', 'Spiderman', 'Avengers']);

    // const handleAdd = () => {
    //     setCategories(cats => [...cats,'Captain america']);
    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories = {setCategories}/>
            <hr />
            <ol>
                {
                    categories.map(category => {
                        return <li key = {category}> {category} </li>;
                    })
                }
            </ol>
        </>
    );
}