import React from "react";

const logo = props => (
  <div>
    <img
      srcset="logo.jpg 320w,
             logo@2x.jpg 480w,
             logo@3x.jpg 800w"
      sizes="(max-width: 320px) 280px,
            (max-width: 480px) 440px,
            800px"
      src="logo.jpg"
      alt="Logo"
    ></img>
  </div>
);

export default logo;
