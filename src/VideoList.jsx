export const API_KEY = 'AIzaSyDUX5L9Ngl44p0n7UdPUSdldQkK0AaWHfg';

export const searchVideos = async (searchQuery, maxResults = 10) => {
    const response = await fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=${maxResults}&type=video&q=${encodeURIComponent(searchQuery)}&key=${API_KEY}`
    );
    const data = await response.json();
    return data.items || [];
};

/*alterar valor de maxresult quando necessario, preocupacao com uso de requests da api*/