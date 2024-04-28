import React from "react";
import { useNavigate } from "react-router-dom";
import CSSHeader from '../style/Components/Header'
import { image } from "../tools/Helper";

function Header() {
  let navigate = useNavigate();
  return (
    <CSSHeader>
        <div className="left-container">
            <div
              onClick={() => navigate('/home')}
              className="application-name">
                <h1><kbd> _IPlayer_ </kbd></h1>
                <h2><samp>Web Music Player</samp></h2>
            </div>
        </div>

        <div className="right-container">
          <span style={{fontWeight: 'bold'}}>Hi { localStorage.getItem("user") }!!</span>
          <img id="icon" src={ image('profile') } alt="Profile Menu" />
        </div>
        
    </CSSHeader>
  )
};

export default Header;
