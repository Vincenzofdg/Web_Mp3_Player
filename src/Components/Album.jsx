import React from "react";
import { useNavigate } from "react-router-dom";
import CSSAlbum from '../style/Components/Album'

function Album({ data }) {
  const { collectionCensoredName, artworkUrl100, collectionId } = data;
  let navigate = useNavigate();

  const handleClick = () => navigate(`/Album/${collectionId}`);

  return (
    <CSSAlbum onClick={ handleClick }>
        <img className="cover" src={ artworkUrl100 } alt="Album Cover" />
        <div className="album">
            <p><strong>{ collectionCensoredName }</strong></p>
        </div>
    </CSSAlbum>
  )
};

export default Album;
