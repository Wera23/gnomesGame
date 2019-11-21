import React from "react";
import styleMonster from "../Styles/Monster.css";
import { Avatar, TableBody, Button, TableCell } from "@material-ui/core/";
import EditMonster from '../EditMonster/EditMonster'

const MonsterElement = props => (
  <div className={styleMonster.tableBody}>
    <TableBody>
      <TableCell className={styleMonster.monsterCell}>
        <div className={styleMonster.monsterProfile}>
          <Avatar>G</Avatar>
          <div className={styleMonster.data}>
            <span className={styleMonster.name}>{props.name}</span>
            <span className={styleMonster.age}>Age: {props.age}</span>
          </div>
        </div>
      </TableCell>

      <TableCell className={styleMonster.monsterCell}>
        {" "}
        <span> Strenght: {props.strenght} </span>{" "}
      </TableCell>
      <TableCell className={styleMonster.monsterCell}>
        <Button onClick={props.deleteGnome}>
          Delete
        </Button>
        
        <EditMonster nameG={props.nameG} />

      </TableCell>
    </TableBody>
  </div>
);

export default MonsterElement;
