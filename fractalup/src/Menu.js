import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css'

const Menu = () => {
    return (
        <nav className="nav_menu">
            <ul className="lista_menu">
                <li className="opcion_principal">
                    <h1>Logo</h1>
                </li>
                <li className="opcion_secundaria">
                    <Link to="/" className="link_opcion" ><h2>Home</h2></Link>
                </li>
                <li className="opcion_secundaria">
                    <Link to="/vista1" className="link_opcion" ><h2>Vista 1</h2></Link>
                </li>
                <li className="opcion_secundaria">
                    <Link to="/vista2" className="link_opcion" ><h2>Vista 2</h2></Link>
                </li>
            </ul>
        </nav>
    )
};

export default Menu;