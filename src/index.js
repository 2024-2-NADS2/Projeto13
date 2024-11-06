import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Homepage from './Homepage.js';
import Login from './Login.js';
import Cadastro from './Cadastro.js';
import Sobre from './Sobre.js';
import Videopage from './Videopage.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Cadastro" element={<Cadastro />} />
        <Route path="/Sobre" element={<Sobre />} />
        <Route path="/Videopage" element={<Videopage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
