import React from "react";
import styleMonster from "../Styles/Monster.css";
import { TableBody, TableCell } from "@material-ui/core/";

const MonsterElement = props => (
  <div className={styleMonster.tableBody}>
    <TableBody >
      <TableCell className={styleMonster.monsterCell}>
        <div>
          <p>{props.name}</p>
          <p>Age: {props.age}</p>
        </div>
      </TableCell>
      <TableCell className={styleMonster.monsterCell}> Strenght: {props.strenght} </TableCell>
    </TableBody>
  </div>
);

export default MonsterElement;
