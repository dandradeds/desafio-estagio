import React from 'react'
import Header from '../../components/Header/header'
import NavBar from '../../components/NavBar/navBar'
import BemvindoIcon from "../../assets/BemVindo.png"
import "./style.css"

function Home() {
  return (
    <div>
      <Header/>
      <div className="conatainer">
        <NavBar/>
         <div className="geral">
          <div className='BemVindo'>
            <h1>Bem-vindo ao sistema</h1>
            <img src={BemvindoIcon} alt="BemVindo" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;