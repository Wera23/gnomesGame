
import React from "react";
import logo from "../../assets/logo.png";
import logo2 from "../../assets/logo@2x.png";
import logo3 from "../../assets/logo@3x.png";




const Logo = (props: any) => (
  
  <div>
    <img
      srcSet={`${logo} 320w,
             ${logo2} 480w,
             ${logo3} 800w`}
      sizes="(max-width: 320px) 98px,
            (max-width: 480px) 196px,
            294px"
      src="./assets/logo.png"
      alt="Logo"
    ></img>
  </div>
);

export default Logo;
