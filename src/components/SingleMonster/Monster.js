import React from "react";
import { Avatar } from "@material-ui/core/";
import MetricMonster from "./Components/MetricMonster";
import PropertiesMonster from "./Components/PropertiesMonster";
import BtnActionsMonster from "./Components/BtnActionsMonster";

const Monster = props => {
  const { gnome } = props;

  return (
    <div className="monster">
      <div className="monster__table-profil-cell">
        <Avatar>G</Avatar>
        <MetricMonster name={gnome.name} age={gnome.age} />
      </div>
      <div className="monster__table-profil-cell">
        <PropertiesMonster strenght={gnome.strenght} />
      </div>
      <div className="monster__table-action-cell">
        <BtnActionsMonster
          id={gnome.id}
          age={gnome.age}
          name={gnome.name}
          strenght={gnome.strenght}
        ></BtnActionsMonster>
      </div>
    </div>
  );
};
export default Monster;
