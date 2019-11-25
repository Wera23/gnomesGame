import React from "react";

const PropertiesMonster = props => (
  <div className="monster-properties">
    
    <div className="strenght-bar">
      <div className="strenght-bar__tinted-field">
        <div
          className="strenght-bar__tinted-field--tinted"
          style={{ width: props.strenght + "%" }}
        ></div>
      </div>
    </div>

    <span className="monster-properties--width"> {props.strenght}/100</span>

    <span className="monster-properties--strong"> Strenght </span>
    
  </div>
);

export default PropertiesMonster;
