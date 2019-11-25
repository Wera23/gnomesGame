import React from "react";
import { StyledButton } from "../Forms/StyledButton";
import EditMonster from "../EditMonster/EditMonster";

const BtnActionsMonster = props => (
  <div className="monster__actions">
    <StyledButton
      color="secondary"
      variant="outlined"
      small
      onClick={props.deleteGnome}
    >
      Delete
    </StyledButton>

    <EditMonster
      id={props.id}
      strenght={props.strenght}
      age={props.age}
      name={props.name}
      replaceGnome={props.replaceGnome}
      handleInputChange={props.handleInputChange}
    />
  </div>
);

export default BtnActionsMonster;
