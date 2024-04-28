import React, { useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
// Redux
import { connect } from 'react-redux';
import Actions from "../redux/actions";
// Components
import Header from "../Components/Header";
// API
import SongsResquest from "../service/SongsRequest";
// Style
import CSSAlbum from "../style/Pages/Album"

function Album(props) {
  const { id } = useParams();
  const { info, songList, updateAlbum, updateSongs } = props;
  const {
    artworkUrl100: albumCover,
    artistName: artist,
    collectionName: albumName,
    trackCount: numberOfSongs,
    primaryGenreName: genre,
    collectionViewUrl: itunes
  } = info

  const songsAPI = useCallback(async () => {
    const { albumInfo, songs } = await SongsResquest(id)
    updateAlbum(albumInfo)
    updateSongs(songs);
  }, [id, updateAlbum, updateSongs])

  useEffect(() => {
    songsAPI();
  }, [songsAPI])
  
  return (
    <>
      <Header />
      <CSSAlbum>
        <div className="album-info">
          <img 
            id="album-cover" 
            src={albumCover}
            onClick={() => window.open(itunes, '_blank', 'noopener', 'noreferrer')}
            alt="Album Cover"
          />
          <div className="info">
            <p><strong>{albumName}</strong></p>
            <p>{artist}</p>
            <div className="additional">
              <p>Tracks: {numberOfSongs < 10 ? `0${numberOfSongs}` : numberOfSongs}</p>
              <p>Genre: { genre }</p>
            </div>
          </div>
        </div>
        <div className="song-list">
          {
            songList.map(({ previewUrl, trackName, trackNumber }) => (
              <div className="song" key={trackNumber + '-' + trackName}>
                <span id="title">{trackNumber < 10 ? `0${trackNumber}` : trackNumber}. {trackName}</span>
                <audio id="track" src={ previewUrl } controls>
                  <track kind="captions" />
                </audio>
              </div>
            ))
          }
        </div>
      </CSSAlbum>
    </>
  )
};

const mapStateToProps = ({ album: { albumInfo, songs } }) => ({ 
  info: albumInfo, 
  songList: songs
});

const mapDispatchToProps = (dispatch) => ({
  updateAlbum: (albumInfo) => dispatch(Actions.album(albumInfo)),
  updateSongs: (songList) => dispatch(Actions.songs(songList)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Album);
