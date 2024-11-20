import React from 'react';
import Titulo from './Titulo';
import More from './More';
import Conteudo from './Conteudo';

function Homepage() {
  return (
    <div>
      <Titulo />
      <div>
        <h1>Veja por onde começar aqui</h1> {/* Corrigido a classe vazia */}
      </div>
      <div style={{ display: "flex" }}> 
        <Conteudo />
      </div>
      <More />
    </div>
  );
}

export default Homepage;
