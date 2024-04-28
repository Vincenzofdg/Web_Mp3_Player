import React from "react";
import CSSNotFound from '../style/Pages/NotFound'

function NotFound() {
  const image = process.env.PUBLIC_URL + `/images/logo.png`;

  return (
    <CSSNotFound>
        <div className="no-page">
            <img src={image} alt="Application Logo" />
            <h1>Sorry Page Not Found *-*</h1>
        </div>
    </CSSNotFound>
  )
};

export default NotFound;
