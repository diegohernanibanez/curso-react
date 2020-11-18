import React, { useState, useEffect } from 'react'

export const GifGrid = ({category}) => {

    const [count, setcount] = useState(0);

    useEffect(() => {
        getGifs();
    }, []);

    const getGifs = async () => {
        const url = 'https://api.giphy.com/v1/gifs/search?q=X-men&limit=10&api_key=bMH19Iaotzs5gizjb87U9DFOV0qv4NqT';
        const resp = await fetch(url);
        const {data} = await resp.json();
        const gifs = data.map(img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images.downsized_medium.url

            }
        })
        console.log(gifs);
    }
    
    
    return (
        <div>
            <h3>{category}</h3>
        </div>
    )
}
