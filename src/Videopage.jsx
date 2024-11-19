import React, { useState, useEffect } from 'react';
import Video from './Video';
import { searchVideos } from './VideoList';
import Footer from './Components/Footer.jsx'
import Header from './Components/Header.jsx'

export default function VideoPage() {
    const [videos, setVideos] = useState([]);
    const [query, setQuery] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const fetchVideos = async (searchQuery) => {
        setLoading(true);
        setError('');
        try {
            const results = await searchVideos(searchQuery);
            setVideos(results);
        } catch (err) {
            setError('Erro ao carregar vídeos.');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchVideos('Como investir em ações imobiliárias');
    }, []);

    const handleSearch = (event) => {
        event.preventDefault();
        if (query.trim()) {
            fetchVideos(query);
        }
    };

    return (
        <div>
            <Header />
        <div className="video-page">
            <h1 className="video-page-title">Vídeos Recomendados</h1>

            <form className="search-form" onSubmit={handleSearch}>
                <input
                    type="text"
                    className="search-input"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Digite sua pesquisa"
                />
                <button type="submit" className="search-button">Buscar</button>
            </form>

            {loading && <p className="loading-message">Carregando...</p>}
            {error && <p className="error-message">{error}</p>}

            <div className="video-list">
    {videos.length > 0 ? (
        videos.map((video) => (
            <div className="video-item" key={video.id.videoId}>
                <Video
                    videoId={video.id.videoId}
                    titulo={video.snippet.title}
                    canal={video.snippet.channelTitle}
                    thumbnail={video.snippet.thumbnails.medium.url}
                />
            </div>
        ))
    ) : (
        <p className="no-videos">Nenhum vídeo encontrado.</p>
    )}
</div>
        </div>
        <Footer />
        </div>
    );
}
