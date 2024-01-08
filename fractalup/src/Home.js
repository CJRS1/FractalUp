import React from 'react';
import './Home.css'
import peru from './assets/peru.jpg'

const Home = () => {
    return (
        <div className="home_container">
            <div className="filtro_container">
                <div className="filtro_card">
                    <div className="input_filtro">
                        <h4 className='nombre_pais'>País</h4>
                        <form action="">
                            <input className="subrayado" type="text" placeholder='Escribe el país que deseas ver' />
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
            </div>
            <div className="paises_container">
                <div className="pais_card">
                    <img className='pais_img' src={peru} alt="" />
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
                </div>
                <div className="pais_card">
                    <img className='pais_img' src="./assets/peru.jpg" alt="" />
                    <div className="pais_card_info">
                        <img className='bandera_img' src="./assets/peru.jpg" alt="" />
                        <div className="pais_info">
                            <h3>
                                Argentina
                            </h3>
                            <h4>
                                America
                            </h4>
                        </div>
                    </div>
                </div>
                <div className="pais_card">

                </div>
                <div className="pais_card">

                </div>
                <div className="pais_card">

                </div>
                <div className="pais_card">

                </div>
                <div className="pais_card">

                </div>
                <div className="pais_card">

                </div>
                <div className="pais_card">

                </div>
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
    )
};

export default Home;