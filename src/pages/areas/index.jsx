import React from 'react'
import Header from '../../components/Header/header';
import Manutencao from '../../components/manutencao/manutencao';
import NavBar from '../../components/NavBar/navBar';

function Areas() {
    return ( 
        <div>
            <Header/>
            <NavBar/>
            <div className="geral">
                <Manutencao props={'áreas'}/>
            </div>
        </div>
     );
}

export default Areas;