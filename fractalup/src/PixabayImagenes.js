import React, { useState, useEffect } from 'react';

const PixabayImagenes = ({ tipo, pais }) => {
    const [imagen, setImagen] = useState(null);
    const API_KEY = '33458136-5938f67afcde83b163bbb717a';

    useEffect(() => {
        const obtenerImagen = async () => {
            let query = '';

            if (tipo === 'bandera') {
                query = `${encodeURIComponent(pais)}+flag`;
            } else if (tipo === 'ciudad') {
                query = `${encodeURIComponent(pais)}+cityscape+urban+architecture`;
            }

            const url = `https://pixabay.com/api/?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`;

            try {
                const res = await fetch(url);
                const data = await res.json();

                if (data.totalHits > 0) {
                    setImagen(data.hits[0].webformatURL);
                } else {
                    setImagen(null);
                }
            } catch (error) {
                console.error('Error al obtener imagen:', error);
                setImagen(null);
            }
        };
        obtenerImagen();
    }, [tipo, pais]);

    let imagenElement = null;

    if (imagen) {
        const contenedorClass = tipo === 'bandera' ? 'bandera_contenedor' : 'pais_contenedor';
        const imagenClass = tipo === 'bandera' ? 'bandera_img' : 'pais_img';
        
        imagenElement = (
            <div className={contenedorClass}>
                <img
                    src={imagen}
                    alt={`Imagen de ${tipo === 'bandera' ? 'bandera' : 'ciudad'} de ${pais}`}
                    className={imagenClass}
                />
            </div>
        );
    }
    return imagenElement;
};

export default PixabayImagenes;
