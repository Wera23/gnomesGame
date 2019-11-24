import React from "react";
import logo1 from '../../assets/logo.png';


const logo = props => (
  <div>
    <img 
      srcset="logo1 320w,
             logo@2x 480w,
             logo@3x 800w"
      sizes="(max-width: 320px) 280px,
            (max-width: 480px) 440px,
            800px"
      src="logo"
      alt="Logo"
    ></img>
  </div>
);

export default logo;
