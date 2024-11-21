import Header3 from './Components/Header3';
import Footer from './Components/Footer';

export default function Sobre() {
    return (
        <div>
            <Header3 />
            <main className="corpo">
                <div className="container">
                    <section className="secao">
                        <h2 className="titulo">Conheça os Criadores</h2>
                        <p className="paragrafo">
                            Nós somos <strong>Rafael Budoya</strong> e <strong>----</strong>, desenvolvedores web com experiência na criação de plataformas digitais.
                            Nosso objetivo é facilitar o aprendizado sobre investimentos, oferecendo uma interface intuitiva e recursos acessíveis
                            para todos os níveis de conhecimento financeiro.
                        </p>
                        <ul className="lista-criadores">
                            <li className="item-criador">
                                <img className="foto-criador" src="criador1.jpg" alt="Criador 1" />
                                <div>
                                    <strong className="destaque">Rafael Budoya</strong>
                                    <p>Descrição sobre o Criador 1 com mais detalhes sobre suas habilidades e contribuições para o projeto.</p>
                                </div>
                            </li>
                            <li className="item-criador">
                                <img className="foto-criador" src="criador2.jpg" alt="Criador 2" />
                                <div>
                                    <strong className="destaque">Criador 2</strong>
                                    <p>Descrição sobre o Criador 2 destacando suas competências e motivações para o desenvolvimento do projeto.</p>
                                </div>
                            </li>
                        </ul>
                    </section>

                    <section className="secao apoio">
                        <h2 className="titulo">Apoie nossa plataforma</h2>
                        <p className="paragrafo">
                            A <strong>-------</strong> é um projeto dedicado a oferecer educação acessível sobre investimentos.
                            Para continuar melhorando nossos cursos e recursos, contamos com o apoio dos usuários. 
                            Se você acredita na importância de democratizar o conhecimento financeiro, considere fazer uma doação.
                        </p>
                        <p className="campo-atencao">
                            Sua contribuição nos ajuda a expandir nossas ofertas e atingir mais pessoas interessadas em aprender sobre investimentos.
                            Toda ajuda é bem-vinda!
                        </p>
                        <div className="botoes-doacao">
                            <p>budoyya@gmail</p>
                            <p>emial do drico</p>

                        </div>
                    </section>

                    <section className="secao imagens">
                        <div>
                            <img className="imagem" src="imagem1.jpg" alt="Ilustração do Projeto" />
                        </div>
                        <div>
                            <img className="imagem" src="imagem2.jpg" alt="Visão do Sistema" />
                        </div>
                    </section>
                </div>
            </main>
            <Footer />
        </div>
    );
}
