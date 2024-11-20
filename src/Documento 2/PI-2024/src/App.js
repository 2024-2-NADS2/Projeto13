import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from './front-end/Homepage';
import Login from './front-end/Login';
import Cadastro from './front-end/Cadastro';
import Sobre from './front-end/Sobre';
import Videopage from './front-end/Videopage';
import Envioform from './front-end/Envioform';
import Header from './Components/Header';
import Footer from './Components/Footer';
import PrivateRoute from './front-end/PrivateRoute'; 
import Logout from './front-end/Logout';

export default function App() {
  return (
    <div>
      <Header />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/sobre" element={<Sobre />} />
          
          {/* Rota pública */}
          <Route path="/videopage" element={<Videopage />} />
          
          <Route path="/envioform" element={<Envioform />} />

          {/* Rota para Logout */}
          <Route path="/logout" element={<Logout />} />

          {/* Rota protegida */}
          <Route element={<PrivateRoute />}>
            <Route path="/dashboard" element={<div>Página do Dashboard</div>} />
          </Route>
        </Routes>
      </div>
      <Footer />
    </div>
  );
}
