import { ARTIST, ALBUMS } from "../actions";

const INITIAL_STATE = {
  name: "",
  albums: [],
};

const ArtistReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ARTIST:
      return {
        ...state,
        name: action.payload.name,
      };
    case ALBUMS:
      return {
        ...state,
        albums: action.payload.dataAPI,
      };
    default:
      return state;
  }
};

export default ArtistReducer;
