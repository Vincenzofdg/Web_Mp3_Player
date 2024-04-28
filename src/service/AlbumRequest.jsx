const AlbumRequest = async (artist) => {
    const formatedName = encodeURI(artist).replaceAll('%20', '+');
    const url = `https://itunes.apple.com/search?entity=album&term=${formatedName}&attribute=allArtistTerm`;
    // const url = `https://itunes.apple.com/search?term=${formatedName}`

    try {
      const response = await fetch(url, { method: 'POST', mode: 'cors' });
      const { results } = await response.json();
      return results;
    } catch (error) {
      console.log(error);
      return [];
    } 
  };
  
  export default AlbumRequest;