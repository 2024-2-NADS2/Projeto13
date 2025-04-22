import React from 'react';

export default function Video({ videoId, titulo, canal, thumbnail }) {
    return (
        <a
            href={`https://www.youtube.com/watch?v=${videoId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="video-link"
        >
            <div className="video">
                <img src={thumbnail} alt={titulo} />
                <h3>{titulo}</h3>
                <p>{canal}</p>
            </div>
        </a>
    );
}
