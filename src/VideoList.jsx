import React, { useState, useEffect } from 'react';
import Video from './Video';

const API_KEY = 'AIzaSyDUX5L9Ngl44p0n7UdPUSdldQkK0AaWHfg';

export default function VideoList() {
    const [videos, setVideos] = useState([]);
    const [query, setQuery] = useState('');

    // Função para buscar vídeos da API
    const searchVideos = async (query) => {
        try {
            const response = await fetch(
                `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${encodeURIComponent(query)}&key=${API_KEY}`
            );
            const data = await response.json();
            setVideos(data.items || []);
        } catch (error) {
            console.error('Erro ao buscar vídeos:', error);
        }
    };

    // Função chamada quando o usuário clica no botão de busca
    const handleSearch = (event) => {
        event.preventDefault();
        if (query) {
            searchVideos(query);
        }
    };

    return (
        <div>
            <h1>Buscar Vídeos no YouTube</h1>
            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Digite sua pesquisa"
                />
                <button type="submit">Buscar</button>
            </form>
            
            <div className="video-list">
                {videos.map((video) => (
                    <Video
                        key={video.id.videoId}
                        titulo={video.snippet.title}
                        canal={video.snippet.channelTitle}
                        thumbnail={video.snippet.thumbnails.medium.url}
                    />
                ))}
            </div>
        </div>
    );
}
/* pagina de busca de videos */