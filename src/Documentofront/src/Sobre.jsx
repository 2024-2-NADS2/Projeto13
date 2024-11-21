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
                            Nós somos <strong>Rafael Budoya</strong> e <strong>Adriano xu ming hui</strong>, desenvolvedores web com experiência na criação de plataformas digitais.
                            Nosso objetivo é facilitar o aprendizado sobre investimentos, oferecendo uma interface intuitiva e recursos acessíveis
                            para todos os níveis de conhecimento financeiro.
                        </p>
                        <ul className="lista-criadores">
                            <li className="item-criador">
                                <img className="foto-criador" src="img/budas.jpeg" alt="Criador 1" />
                                <div>
                                    <strong className="destaque">Rafael Budoya</strong>
                                    <p>Sou desenvolvedor web full-stack, com experiência em criação de interfaces e integração 
                                        de sistemas. Neste projeto, fui responsável pelo desenvolvimento do front-end 
                                        e pela implementação de serviços de APIS, buscando sempre entregar uma plataforma intuitiva. 
                                        Adoro transformar ideias em soluções digitais!
</p>
                                </div>
                            </li>
                            <li className="item-criador">
                                <img className="foto-criador" src="criador2.jpg" alt="Criador 2" />
                                <div>
                                    <strong className="destaque">Adriano xu ming hui</strong>
                                    <p>Sou desenvolvedor web especializado em back-end e banco de dados. 
                                        No desenvolvimento desta plataforma, fui responsável por criar e gerenciar as APIs,
                                         além de estruturar o banco de dados para garantir o desempenho e a segurança do sistema.
                                          Meu objetivo é sempre construir soluções robustas e eficientes para transformar 
                                          ideias em realidade.
</p>
                                </div>
                            </li>
                        </ul>
                    </section>

                    <section className="secao apoio">
                        <h2 className="titulo">Apoie nossa plataforma</h2>
                        <p className="paragrafo">
                            A <strong>APT "Aulas Para Todos</strong> é um projeto dedicado a oferecer educação acessível sobre investimentos.
                            Para continuar melhorando nossos cursos e recursos, contamos com o apoio dos usuários. 
                            Se você acredita na importância de democratizar o conhecimento financeiro, considere fazer uma doação.
                        </p>
                        <p className="campo-atencao">
                            Sua contribuição nos ajuda a expandir nossas ofertas e atingir mais pessoas interessadas em aprender sobre investimentos.
                            Toda ajuda é bem-vinda! caso sinta se avontadade  nos envie uma mensagem em nossos respectivos e-mails a seguir
                        </p>
                        <div className="botoes-doacao">
                            <p>budoyya@gmail</p>
                            <p>adriano.hui@fecap.edu.br</p>

                        </div>
                    </section>
                </div>
            </main>
            <Footer />
        </div>
    );
}
