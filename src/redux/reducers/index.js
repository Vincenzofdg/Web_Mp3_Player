import { combineReducers } from "redux";
import UserReducer from "./User";
import ArtistReducer from "./Artist";
import AlbumReducer from "./Album";

const allReducers = combineReducers({
  user: UserReducer,
  artist: ArtistReducer,
  album: AlbumReducer,
});

export default allReducers;
