import React from 'react';
import Titulo from './Titulo';
import More from './More';
import Conteudo from './Conteudo.jsx';
import Header from './Components/Header';
import Footer from './Components/Footer';

function Homepage() {
  return (
    <div>
      <Header />
      <Titulo />
      <div class = ''>
        <h1>Veja por onde comecar aqui</h1>
      </div>
      <div style={{ display: "flex" }}> 
        <Conteudo />
      </div>
      <More />
      <Footer />
    </div>
  );
}

export default Homepage;
