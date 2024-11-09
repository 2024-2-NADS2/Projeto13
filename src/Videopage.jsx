import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Conteudo from './Conteudo.jsx';

export default function Videopage() {
    return (
        <div>
            <Header />
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-around" }}>
                <Conteudo />
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-around" }}>
                <Conteudo />
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-around" }}>
                <Conteudo />
            </div>
            <Footer />
        </div>
    );
}
