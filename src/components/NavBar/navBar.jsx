import React from 'react' 
import { Link } from "react-router-dom";
import '../NavBar/style.css'



function NavBar() {
    return (  
        <nav className="sidebar">
        <ul>
            <Link to="/metas">
            <li> 
                Cadastro de metas
            </li>
            </Link>
            <Link to="/areas">
            <li> 
                Cadastro de áreas
            </li>
            </Link>
            <Link to="/origens">
            <li>
                Cadastro de origens
            </li>
            </Link>
            <Link to="/habilidades">
            <li>
                Cadastro de habilidades
            </li>
            </Link>
        </ul>
    </nav>
    );
}

export default NavBar;