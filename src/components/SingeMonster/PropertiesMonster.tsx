import React, { useEffect } from "react";
import { IMonster, MonsterColors, MonsterTypes } from "_models";

interface IProps {
  strenght: number;
  monster: IMonster;
}

export const PropertiesMonster = (props: IProps) => {

  const { strenght, monster } = props;
  
  useEffect(() => {
    console.log(props.monster);
  }, []);

  return (
    <div className="monster__propeteries">
      <div className="strenght">
        <div className="strenght__bar">
          <div
            className="strenght__bar--tinted"
            style={{ width: strenght + "%" }}
          >
            {monster !== undefined ? monster.color : "ni ma"}
          </div>
        </div>
      </div>

      <span className="strenght__text">{strenght}/100</span>
      <span className="strenght__text strenght__text--strong"> Strenght</span>
    </div>
  );
};
