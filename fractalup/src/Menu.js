import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Menu.css'

const Menu = () => {

    const [botonActivo, setBotonActivo] = useState('home')

    const presionarBotonActivo = (link) => {
        setBotonActivo(link)
    }

    return (
        <nav className="nav_menu">
            <ul className="lista_menu">
                <li className="opcion_principal">
                    <h1>Logo</h1>
                </li>
                <li className={`opcion_secundaria ${botonActivo=== 'home' ? 'active_link' : ''}`}>
                    <Link 
                    to="/" 
                    className="link_opcion" 
                    onClick={() => presionarBotonActivo('home')}
                    ><h2>Home</h2></Link>
                </li>
                <li className={`opcion_secundaria ${botonActivo=== 'vista1' ? 'active_link' : ''}`}>
                    <Link 
                    to="/vista1" 
                    className="link_opcion" 
                    onClick={() => presionarBotonActivo('vista1')}
                    ><h2>Vista 1</h2></Link>
                </li>
                <li className={`opcion_secundaria ${botonActivo=== 'vista2' ? 'active_link' : ''}`}>
                    <Link 
                    to="/vista2" 
                    className="link_opcion" 
                    onClick={() => presionarBotonActivo('vista2')}
                    ><h2>Vista 2</h2></Link>
                </li>
            </ul>
        </nav>
    )
};

export default Menu;