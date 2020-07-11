
const getImagen = async() => {
    try {
        const apiKey = 'bMH19Iaotzs5gizjb87U9DFOV0qv4NqT';
        const resp = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const {data} = await resp.json();
        const {url} = data.images.original;

        const img = document.createElement('img');
        img.src = url;
                
        document.body.append(img);        
    } catch (err) {
        // Manejo de errores
        console.error(err);
    }
    
    
}

getImagen();
