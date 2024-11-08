// Paginas.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from './Main.jsx';
import Entrar from './Entrar.jsx'; 
import Inicio from './Inicio.jsx';
export default function Paginas() {
  return (
    <div>
      <Routes>
        <Route path='/inicio' element={<Inicio />}></Route>
        <Route path='/entrar' element={<Entrar />}></Route> 
      </Routes>
    </div>
  );
}
