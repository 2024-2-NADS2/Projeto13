import React from 'react';
import Video from './Video.jsx';

const videosDestacados = [
    {
        id: 'dQw4w9WgXcQ',
        titulo: 'Título do Vídeo Exemplo 1',
        canal: 'Canal Exemplo 1',
        thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/mqdefault.jpg'
    },
    {
        id: 'Q6x0xnI0uCg',
        titulo: 'AULA COMPLETA para INICIANTES que NÃO SABEM POR ONDE COMEÇAR a INVESTIR',
        canal: 'Primo Pobre',
        thumbnail: 'https://img.youtube.com/vi/Q6x0xnI0uCg/mqdefault.jpg'
    },
    {
        id: '3EfGhI4JkLm',
        titulo: 'Título do Vídeo Exemplo 3',
        canal: 'Canal Exemplo 3',
        thumbnail: 'https://img.youtube.com/vi/3EfGhI4JkLm/mqdefault.jpg'
    },
    {
        id: '4JkLmNoPqRs',
        titulo: 'Título do Vídeo Exemplo 4',
        canal: 'Canal Exemplo 4',
        thumbnail: 'https://img.youtube.com/vi/4JkLmNoPqRs/mqdefault.jpg'
    }
];

export default function Conteudo() {
    return (
        <section className="conteudos">
            <div className="conteudo">
                {videosDestacados.map((video) => (
                    <Video
                        key={video.id}
                        videoId={video.id} // Adicionado para passar o ID corretamente
                        titulo={video.titulo}
                        canal={video.canal}
                        thumbnail={video.thumbnail}
                    />
                ))}
            </div>
        </section>
    );
}
