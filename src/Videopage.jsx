import React, { useState, useEffect } from 'react';
import Video from './Video';
import { searchVideos } from './VideoList';

export default function VideoPage() {
    const [videos, setVideos] = useState([]);
    const [query, setQuery] = useState('Como investir ações imobiliarias');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchVideos = async () => {
            setLoading(true);
            try {
                const results = await searchVideos(query);
                setVideos(results);
            } catch (err) {
                setError('Erro ao carregar vídeos.');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };
        fetchVideos();
    }, [query]);

    return (
        <div>
            <h1>Vídeos Recomendados</h1>
            {loading && <p>Carregando...</p>}
            {error && <p>{error}</p>}
            
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
