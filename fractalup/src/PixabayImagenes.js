import React, { useState, useEffect } from 'react';

const PixabayImagenes = ({ tipo, pais }) => {
    const [imagen, setImagen] = useState(null);
    const API_KEY = process.env.API_KEY;

    useEffect(() => {
        const obtenerImagen = async () => {
            let query = '';

            if (tipo.startsWith('ciudad')) {
                query = `${encodeURIComponent(pais)}+cityscape+urban+architecture`;
            } else if (tipo === 'bandera') {
                query = `${encodeURIComponent(pais)}+flag`;
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
    }, [tipo, pais, API_KEY]);

    let imagenElement = null;
    let imagenClass = '';

    if (tipo.startsWith('ciudad')) {
        imagenClass = tipo === 'ciudad1' ? 'pais_img' : 'ciudad2_img';
    } else if (tipo === 'bandera') {
        imagenClass = 'bandera_img';
    } else {
        imagenClass = 'default_img'; 
    }

    if (imagen) {
        const contenedorClass = tipo === 'bandera' ? 'bandera_contenedor' : 'pais_contenedor';

        imagenElement = (
            <div className={contenedorClass}>
                <img
                    src={imagen}
                    alt={`Imagen de ${tipo === 'bandera' ? 'bandera' : 'ciudad'} de ${pais}`}
                    className={imagenClass}
                />
            </div>
        );
    } else if (!imagen) {
        const contenedorClass = tipo === 'bandera' ? 'bandera_contenedor' : 'pais_contenedor_sinimg';

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
