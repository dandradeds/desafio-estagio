import React from 'react' 
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Areas from './pages/areas';
import Habilidades from './pages/habilidades';
import Home from './pages/home';
import Metas from './pages/metas';
import Origens from './pages/origens';

function Rotas() {
    return (
            <BrowserRouter>
                <Routes>
                    <Route path='/' exact element={<Home/>} />
                    <Route path='/metas' element={<Metas/>} />
                    <Route path='/areas' element={<Areas/>} />
                    <Route path='/origens' element={<Origens/>} />
                    <Route path='/habilidades' element={<Habilidades/>} />
                </Routes>
            </BrowserRouter>
        

        
     );
}

export default Rotas;