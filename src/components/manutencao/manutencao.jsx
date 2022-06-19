import React from 'react'
import construction from "../../assets/construction.png"
import './style.css'

function Manutencao({props}) {
    return (  
        <div className='manutencao'>
            <h1> A página {props} está em manutenção</h1>
            <img src={construction} alt="construction" />

        </div>
    );
}

export default Manutencao;