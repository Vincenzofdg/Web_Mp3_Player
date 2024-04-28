export const NAME = "NAME";
export const PASSWORD = "PASSWORD";
export const EMAIL = "EMAIL";
export const ARTIST = "ARTIST";
export const ALBUMS = "ALBUMS";
export const ALBUM = "ALBUM";
export const SONGS = "SONGS";

const Actions = {
  name: (name) => ({
    type: NAME,
    payload: { name },
  }),
  password: (password) => ({
    type: PASSWORD,
    payload: { password },
  }),
  email: (email) => ({
    type: EMAIL,
    payload: { email },
  }),
  artist: (name) => ({
    type: ARTIST,
    payload: { name },
  }),
  albums: (dataAPI) => ({
    type: ALBUMS,
    payload: { dataAPI },
  }),
  album: (albumAPI) => ({
    type: ALBUM,
    payload: { albumAPI },
  }),
  songs: (songsAPI) => ({
    type: SONGS,
    payload: { songsAPI },
  }),
};

export default Actions;
