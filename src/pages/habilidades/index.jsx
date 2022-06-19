import React from 'react'
import Header from '../../components/Header/header';
import NavBar from '../../components/NavBar/navBar';
import Manutencao from '../../components/manutencao/manutencao';


function Habilidades() {
    return (  
        <div>
            <Header/>
            <div className="conatainer">
              <NavBar/>
               <div className="geral">
                <Manutencao props={'habilidades'}/>
               </div>
            </div>
        </div>
    );
}

export default Habilidades;