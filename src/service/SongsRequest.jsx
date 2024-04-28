const SongsResquest = async (id) => {
    const url = `https://itunes.apple.com/lookup?id=${id}&entity=song`;

    try {
        const response = await fetch(url, { method: 'POST', mode: 'cors' });
        const { results } = await response.json();

        const albumInfo = results.shift();

        return {
            albumInfo,
            songs: results,
        };
    } catch (error) {
        console.log(error);
        return [];
    }
  };
  
  export default SongsResquest;