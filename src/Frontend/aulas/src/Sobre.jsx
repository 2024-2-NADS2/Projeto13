import Header from './Header.jsx'
import Footer from './Footer.jsx'

export default function Sobre() {
    return (
      <div>
         <Header />
      <div className="corpo">  
        <div className="container">
          <section className="secao">
            <h2 className="titulo">Conheça os Criadores</h2>
            <p className="paragrafo">
            Conheça os Criadores
            Nós somos --- e ----, desenvolvedores web com experiência na criação de plataformas digitais. 
            Com o objetivo de facilitar o aprendizado sobre investimentos, unimos nossas competências para desenvolver esta plataforma. 
            Nossa missão é proporcionar uma interface intuitiva e recursos acessíveis 
            que atendam às necessidades de usuários em diferentes níveis de conhecimento financeiro.
            </p>
            <ul className="lista-criadores">
              <li className="item-criador">
                <strong className="destaque">Criador 1:</strong>descricao a trabalhar
              </li>
              <li className="item-criador">
                <strong className="destaque">Criador 2:</strong> descricao a trabalhar
              </li>
            </ul>
          </section>
    
          <section className="secao">
            <h2 className="titulo">Apoie nossa plataforma</h2>
            <p className="paragrafo">
            A ------- é um projeto dedicado a oferecer educação acessível sobre investimentos. Para continuar melhorando nossos cursos e recursos, 
            contamos com o apoio dos usuários. Se você acredita na importância de democratizar o conhecimento financeiro, considere fazer uma doação.
             Sua contribuição nos ajudará a expandir nossas ofertas e a atingir mais pessoas interessadas em aprender sobre investimentos.
            </p>
            <p className="campo-atencao">
              Se deseja apoiar, considere fazer uma doação. Toda ajuda é bem-vinda e nos permite continuar com esse trabalho.
            </p>
          </section>
    
          <section className="secao">
            <div>
              <img className="imagem" src="imagem1.jpg" alt="Imagem 1" />
            </div>
            <div>
              <img className="imagem" src="imagem2.jpg" alt="Imagem 2" />
            </div>
          </section>
        </div>
      </div>
      <Footer />
      </div>
       
      
    );
  }
  