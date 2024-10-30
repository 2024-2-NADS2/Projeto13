import React from 'react';
import Header from './Header.jsx';
import Titulo from './Titulo.jsx';
import More from './More.jsx';
import Conteudo from './Conteudo.jsx';
import Footer from './Footer.jsx';

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
