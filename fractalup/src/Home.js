import React, { useMemo, useState, useRef, useEffect } from 'react';
import './Home.css'
import peru from './assets/peru.jpg'
import continentexd from './assets/continente.jpg'
import { ApolloClient, InMemoryCache, ApolloProvider, useQuery, gql } from '@apollo/client';

const Home = () => {
    const client = useMemo(() => new ApolloClient({
        uri: 'https://countries.trevorblades.com/',
        cache: new InMemoryCache()
    }), []);


    const GET_COUNTRY_INFO = gql`
  query {
    countries {
      name
      capital
      currency
      phone
      languages {
        name
      }
      states {
        name
      }
      continent{
        name
      }
    }
  }
`;


    const { loading, error, data } = useQuery(GET_COUNTRY_INFO, { client });

    const [filtro, setFiltro] = useState('');
    const [mostrarFiltro, setMostrarFiltro] = useState(false);
    const refInput = useRef(null);
    const refDiv = useRef(null);

    const [continente, setContinente] = useState([]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (refDiv.current && !refDiv.current.contains(event.target) && !refInput.current.contains(event.target)) {
                setMostrarFiltro(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);


    const toggleMostrarFiltro = () => {
        setMostrarFiltro(!mostrarFiltro);
    };

    const ingresarFiltro = (event) => {
        setFiltro(event.target.value);
    }

    if (loading) return <div className="home_container"><p>Cargando...</p></div>;
    if (error) return <div className="home_container"><p>Error al cargar los datos</p></div>;

    const paises = data && data.countries ? data.countries : [];

    const filtroPaises = paises.filter(country =>
        country.name.toLowerCase().includes(filtro.toLowerCase())
    ).slice(0, 9);

    console.log(filtroPaises)

    const buscarContinente = (nombreContinente) => {
        console.log("continente")
        setContinente(prev => {
            const newContinents = prev.includes(nombreContinente)
                ? prev.filter(cont => cont !== nombreContinente)
                : [...prev, nombreContinente];
            return newContinents;
        });
    };

    console.log(continente)

    const limpiar = () => {
        setContinente([])
    }



    return (
        <ApolloProvider client={client}>
            <div className="home_container">
                <div className="filtro_container">
                    <div className="filtro_card">
                        <div className="input_filtro">
                            <h4 className='nombre_pais'>País</h4>
                            <form action="">
                                <input className="subrayado"
                                    type="text"
                                    placeholder='Escribe el país que deseas ver'
                                    ref={refInput}
                                    value={filtro}
                                    onChange={ingresarFiltro}
                                    onClick={toggleMostrarFiltro}
                                />
                            </form>
                        </div>
                        <div className="boton_buscar_container">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <circle cx="11" cy="11" r="8" />
                                <line x1="21" y1="21" x2="16.65" y2="16.65" />
                            </svg>
                            <h6>Buscar</h6>
                        </div>
                    </div>
                    {mostrarFiltro && (
                        <div className="filtrar_continente_container" ref={refDiv}>
                            <div className="filtrar_continente_titulo">
                                <h4 className="titulo_filtro" >Filtrar por continentes</h4>
                                <h4 className="titulo_limpiar" onClick={limpiar}>Limpiar</h4>
                            </div>
                            <div className="continente_container">
                                <div className="continente_img_nombre">
                                    <img className={`continente_img ${continente.includes('Europe') ? 'efecto-click' : ''}`} src={continentexd} alt="Europa" onClick={() => buscarContinente('Europe')} />
                                    <h5>Europa</h5>
                                </div>
                                <div className="continente_img_nombre">
                                    <img className={`continente_img ${continente.includes('America') ? 'efecto-click' : ''}`} src={continentexd} alt="América" onClick={() => buscarContinente('America')} />
                                    <h5>América</h5>
                                </div>
                                <div className="continente_img_nombre">
                                    <img className={`continente_img ${continente.includes('Asia') ? 'efecto-click' : ''}`} src={continentexd} alt="Asia" onClick={() => buscarContinente('Asia')} />
                                    <h5>Asia</h5>
                                </div>
                                <div className="continente_img_nombre">
                                    <img className={`continente_img ${continente.includes('Oceania') ? 'efecto-click' : ''}`} src={continentexd} alt="Oceanía
                                    " onClick={() => buscarContinente('Oceania')} />
                                    <h5>Oceanía</h5>
                                </div>
                                <div className="continente_img_nombre">
                                    <img className={`continente_img ${continente.includes('Africa') ? 'efecto-click' : ''}`} src={continentexd} alt="África" onClick={() => buscarContinente('Africa')} />
                                    <h5>África</h5>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <div className="paises_container">
                    {filtro ? (
                        filtroPaises.map(pais => (
                            <div className="pais_card" key={pais.code}>
                                <img className='pais_img' src={peru} alt="" />
                                <div className="pais_card_info">
                                    <img className='bandera_img' src={peru} alt="" />
                                    <div className="pais_info">
                                        <h3>
                                            {pais.name}
                                        </h3>
                                        <h4>
                                            {pais.continent.name}
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        paises.slice(0, 9).map(country => (
                            <div className="pais_card" key={country.code}>
                                <img className='pais_img' src={peru} alt="" />
                                <div className="pais_card_info">
                                    <img className='bandera_img' src={peru} alt="" />
                                    <div className="pais_info">
                                        <h3>
                                            {country.name}
                                        </h3>
                                        <h4>
                                            {country.continent.name}
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>
                <div className="pais_info_detallado_container">
                    <img className="pais_img_detalle" src={peru} alt="" width={'200px'} />
                    <div className="pais_card_info">
                        <img className='bandera_img' src={peru} alt="" />
                        <div className="pais_info">
                            <h3>
                                United Kingdom
                            </h3>
                            <h4>
                                Europe
                            </h4>
                        </div>
                    </div>
                    <div className="pais_info_detalles_card">
                        <div className="pais_info_detalles">
                            <h3>
                                Capital:
                            </h3>
                            <h4>
                                London
                            </h4>
                        </div>
                        <div className="pais_info_detalles">
                            <h3>
                                Language:
                            </h3>
                            <h4>
                                English
                            </h4>
                        </div>
                        <div className="pais_info_detalles">
                            <h3>
                                Population:
                            </h3>
                            <h4>
                                500k people
                            </h4>
                        </div>
                        <div className="pais_info_detalles">
                            <h3>
                                Currency:
                            </h3>
                            <h4>
                                Euro, Dollar
                            </h4>
                        </div>
                        <div className="lista_region">
                            <h3>
                                Region
                            </h3>
                            <div className="regiones_container">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ApolloProvider>
    )
};

export default Home;