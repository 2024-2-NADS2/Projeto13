
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Homepage from './Homepage.jsx';
import Login from './Login.jsx';
import Cadastro from './Cadastro.jsx';
import Sobre from './Sobre.jsx'
import Videopage from './Videopage.jsx'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Login" element={<Login />}/>
        <Route path='/Cadastro' element={<Cadastro />}/>
        <Route path='/Sobre' element={<Sobre />}/>
        <Route path='/Videopage' element={<Videopage />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
