import React from "react";
import { StyledButton } from "../Forms/StyledButton";
import EditMonster from "../EditMonster/EditMonster";
import { IGnome } from "_models";

interface IBtn {
    id: number;
    strenght: number;
    age: number;
    name: string;
    deleteGnome: Function;
    replaceGnome: Function;
    handleInputChange: Function;
}

const BtnActionsMonster = (props: IBtn, gnome: IGnome) => (
  <div className="monster__actions">
    <StyledButton
      color="secondary"
      variant="outlined"
      //small
      onClick={()=> gnome.deleteGnome}
    >
      Delete
    </StyledButton>

    <EditMonster
      id={props.id}
      strenght={props.strenght}
      age={props.age}
      name={props.name}
      replaceGnome={gnome.replaceGnome}
      handleInputChange={gnome.handleInputChange}
    />
  </div>
);

export default BtnActionsMonster;
