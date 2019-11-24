import React from 'react';
import { Button } from "@material-ui/core/";
import { StyledButton } from "../Forms/StyledButton";
import EditMonster from "../EditMonster/EditMonster";

const btnActionsMonster = (props) => (
    <div className='btn-actions-single-monster' >
          <StyledButton
            color="secondary"
            variant="outlined"
            small
            onClick={props.deleteGnome}
          >
            Delete
          </StyledButton>

          <EditMonster
            strenght={props.strenght}
            age={props.age}
            name={props.name}
            gnomeSubmit={props.gnomeSubmit}
            gnomeChange={props.gnomeChange}
          />
        </div>
)

export default btnActionsMonster