import React from 'react';
import Video from './Video.jsx';

const videosDestacados = [
    {
        id: '4e5gqy4IEvM',
        titulo: 'Ganhar com a Queda das Taxas de Juro? O Meu Investimento no ETF DTLA!',
        canal: 'Edge Over Hedge',
        thumbnail: 'https://img.youtube.com/vi/4e5gqy4IEvM/mqdefault.jpg'
    },
    {
        id: 'Q6x0xnI0uCg',
        titulo: 'AULA COMPLETA para INICIANTES que NÃO SABEM POR ONDE COMEÇAR a INVESTIR',
        canal: 'Primo Pobre',
        thumbnail: 'https://img.youtube.com/vi/Q6x0xnI0uCg/mqdefault.jpg'
    },
    {
        id: 'RyXbPF0Dqo0',
        titulo: '3 INVESTIMENTOS PARA INICIANTES || FAVELADO INVESTIDOR',
        canal: 'FAVELADO INVESTIDOR',
        thumbnail: 'https://img.youtube.com/vi/RyXbPF0Dqo0/mqdefault.jpg'
    },
    {
        id: 'JpFPMdsSJbg',
        titulo: 'OS 10 ETFS PREFERIDOS DOS BRASILEIROS AO INVESTIR NOS ESTADOS UNIDOS',
        canal: 'Papo de Bolsa',
        thumbnail: 'https://img.youtube.com/vi/JpFPMdsSJbg/mqdefault.jpg'
    },
    {
        id: 'a6Bh_m6fIK0',
        titulo: 'Como MUDEI a MINHA VIDA FINANCEIRA em 30 dias com apenas 1 HÁBITO',
        canal: 'Ela investe',
        thumbnail: 'https://img.youtube.com/vi/a6Bh_m6fIK0/mqdefault.jpg'
    }
];

export default function Conteudo() {
    return (
        <section className="conteudos">
            <div className="conteudo">
                {videosDestacados.map((video) => (
                    <Video
                        key={video.id}
                        videoId={video.id} 
                        titulo={video.titulo}
                        canal={video.canal}
                        thumbnail={video.thumbnail}
                    />
                ))}
            </div>
        </section>
    );
}
