import React from "react";
import styleMonster from "../Styles/Monster.css";
import { TableBody, TableCell } from "@material-ui/core/";

const MonsterElement = props => (
  <div>
    <TableBody>
      <TableCell>
        <div className={styleMonster.monsterCell}>
          <p>{props.name}</p>
          <p>Age: {props.age}</p>
        </div>
      </TableCell>
      <TableCell> Strenght: {props.strenght} </TableCell>
    </TableBody>
  </div>
);

export default MonsterElement;
