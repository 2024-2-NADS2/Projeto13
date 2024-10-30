export default function Video({ titulo, canal }) {
    return (
      <div className="video">
        <img src="https://via.placeholder.com/250x140" alt="Miniatura do Vídeo" />
        <div className="detalhes-video">
          <div className="titulo-video">{titulo}</div>
          <div className="canal">{canal}</div>
        </div>
      </div>
    );
  }