import React from 'react';
import Header from './Header.jsx';
import Titulo from './Titulo.jsx';
import More from './More.jsx';
import Comentarios from './Comentarios.jsx';
import Footer from './Footer.jsx';

function Homepage() {
  return (
    <div>
      <Header />
      <Titulo />
      <More />
      <Comentarios />
      <Footer />
    </div>
  );
}

export default Homepage;
