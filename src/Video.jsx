import React from 'react';

export default function Video({ titulo, canal, thumbnail }) {
    return (
        <div className="video">
            <img src={thumbnail} alt={`Miniatura de ${titulo}`} />
            <div className="detalhes-video">
                <div className="titulo-video">{titulo}</div>
                <div className="canal">{canal}</div>
            </div>
        </div>
    );
}
