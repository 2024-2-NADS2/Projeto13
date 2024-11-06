import Video from './Video.jsx'

export default function Conteudo() {
    return (
        <section className="conteudos">
        <div className="conteudo">
        <Video titulo="Título do Vídeo Exemplo" canal="Canal Exemplo" />
        <Video titulo="Outro Vídeo Exemplo" canal="Outro Canal" />
        <Video titulo="Outro Vídeo Exemplo" canal="Outro Canal" />
        <Video titulo="Outro Vídeo Exemplo" canal="Outro Canal" />
        <Video titulo="Outro Vídeo Exemplo" canal="Outro Canal" />
       </div>
        </section>
    );
}
