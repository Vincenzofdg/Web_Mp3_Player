import { ALBUM, SONGS } from "../actions";

const INITIAL_STATE = {
  albumInfo: {},
  songs: [],
};

const ArtistReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ALBUM:
      return {
        ...state,
        albumInfo: action.payload.albumAPI,
      };
    case SONGS:
      return {
        ...state,
        songs: action.payload.songsAPI,
      };
    default:
      return state;
  }
};

export default ArtistReducer;
