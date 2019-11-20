import React from 'react';
import { Button } from "@material-ui/core/";

const MonsterAction = (props) => (
    <div>
        <Button onClick={props.deleteGnome}>Yes</Button>
    </div>
)

export default MonsterAction