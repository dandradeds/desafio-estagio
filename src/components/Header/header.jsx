import React from 'react';
import '../Header/style.css'
import { Link } from "react-router-dom";
import { ImHome } from "react-icons/im";

function Header() {
    return ( 
        <header className='Cabecalho'>
            <h3> Teste Obuc </h3>
            <Link to="/"> 
                <ImHome size={35}/>
            </Link>
            
        </header>
     );
}

export default Header ;