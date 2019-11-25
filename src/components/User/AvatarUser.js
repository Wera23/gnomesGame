import React from "react";
import avatar from "../../assets/avatar.png";
import avatar2 from "../../assets/avatar@2x.png";
import avatar3 from "../../assets/avatar@3x.png";

const AvatarUser = () => (
  <div>
    <img
      srcSet={`${avatar} 320w,
             ${avatar2} 480w,
             ${avatar3} 800w`}
      sizes="(max-width: 320px) 90px,
            (max-width: 480px) 200px,
            300px"
      src="./assets/avatar.png"
      alt="Avatar"
    ></img>
  </div>
);

export default AvatarUser
