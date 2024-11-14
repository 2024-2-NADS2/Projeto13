import React, { useState } from 'react';
import Video from './Video';

const API_KEY = 'AIzaSyDUX5L9Ngl44p0n7UdPUSdldQkK0AaWHfg';

// Função para buscar vídeos da API do YouTube
export const searchVideos = async (searchQuery) => {
    const response = await fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&type=video&q=${encodeURIComponent(searchQuery)}&key=${API_KEY}`
    );
    const data = await response.json();
    return data.items || [];
};

export default function VideoList() {
    const [videos, setVideos] = useState([]);
    const [query, setQuery] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSearch = async (event) => {
        event.preventDefault();
        setLoading(true);
        setError('');
        try {
            const results = await searchVideos(query);
            setVideos(results);
        } catch (err) {
            setError('Erro ao buscar vídeos.');
            console.error(err);
        } finally {
            setLoading(false);
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

            {loading && <p>Carregando...</p>}
            {error && <p className="error">{error}</p>}

            <div className="video-list">
                {videos.map((video) => (
                    <Video
                        key={video.id.videoId}
                        videoId={video.id.videoId}
                        titulo={video.snippet.title}
                        canal={video.snippet.channelTitle}
                        thumbnail={video.snippet.thumbnails.medium.url}
                    />
                ))}
            </div>
        </div>
    );
}
