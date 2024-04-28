import React from "react";
// Redux
import { connect } from 'react-redux';
import Actions from "../redux/actions";
// API
import AlbumRequest from "../service/AlbumRequest";
// Components
import Header from "../Components/Header";
import Album from "../Components/Album";
// Style
import CSSHome from '../style/Pages/Home'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function Home(props) {
  const { name, albums, updateArtist, updateAlbums } = props

  const handleChange = ({ target: { value } }) => updateArtist(value);

  const handleClick = async () => {
    const getAlbums = await AlbumRequest(name);
    updateAlbums(getAlbums)
  };

  return (
    <>
    <Header />
    <CSSHome>
      <InputGroup className="mb-3 search-box">
        <Form.Control
          onChange={(event) => handleChange(event)}
          placeholder="artist" 
        />
        <Button
          variant="outline-secondary" 
          id="button-addon2"
          onClick={() => handleClick()}
        >
          Search
        </Button>
      </InputGroup>
      <div className="albums-board">
        {
          albums.map((album) => <Album key={ album.collectionId } data={ album } />)
        }
      </div>
    </CSSHome>
    </>
  )
};

const mapStateToProps = ({ artist }) => ({
  name: artist.name,
  albums: artist.albums
});

const mapDispatchToProps = (dispatch) => ({
  updateArtist: (artist) => dispatch(Actions.artist(artist)),
  updateAlbums: (dataAPI) => dispatch(Actions.albums(dataAPI)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
