import React from 'react';
import { Button } from "@material-ui/core/";
import EditMonster from "../EditMonster/EditMonster";

const btnActionsMonster = (props) => (
    <div className='btn-actions-single-monster' >
          <Button
            color="secondary"
            variant="outlined"
            small
            onClick={props.deleteGnome}
          >
            Delete
          </Button>

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