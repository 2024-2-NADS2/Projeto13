import React from 'react';
import Titulo from './Titulo';
import More from './More';
import Conteudo from './Conteudos';
import Header from './Components/Header';
import Footer from './Components/Footer';

function Homepage() {
  return (
    <div>
      <Header />
      <Titulo />
      <More />
      <div style={{ display: "flex" }}>
        <Conteudo />
      </div>
      <Footer />
    </div>
  );
}

export default Homepage;
