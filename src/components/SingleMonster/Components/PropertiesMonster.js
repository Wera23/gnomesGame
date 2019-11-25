import React from "react";

const PropertiesMonster = props => (
  <div className="monster__propeteries">
    
    <div className="strenght">
      <div className="strenght__bar">
        <div
          className="strenght__bar--tinted"
          style={{ width: props.strenght + "%" }}
        ></div>
      </div>
    </div>

    <span className="strenght__text">{props.strenght}/100</span>
    <span className="strenght__text strenght__text--strong"> Strenght</span>
  </div>
);

export default PropertiesMonster;
