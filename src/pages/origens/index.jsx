import React from 'react'
import Header from '../../components/Header/header';
import NavBar from '../../components/NavBar/navBar';
import Manutencao from '../../components/manutencao/manutencao';

function Origens() {
    return ( 
        <div>
            <Header/>
            <NavBar/>
            <div className="geral">
                <Manutencao props={'origens'}/>
            </div>
        </div>
     );
}

export default Origens;