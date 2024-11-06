import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from './Homepage';
import Login from './Login';
import Cadastro from './Cadastro';
import Sobre from './Sobre';
import Videopage from './Videopage';
import Header from './Components/Header';
import Footer from './Components/Footer';

export default function App() {
    return (
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/Cadastro" element={<Cadastro />} />
                <Route path="/Sobre" element={<Sobre />} />
                <Route path="/Videopage" element={<Videopage />} />
            </Routes>
            <Footer />
        </div>
    );
}


