import React from "react";
//import { TableBody, TableCell } from "@material-ui/core/";

const MonsterElement = props => (
  <div>
    <p id={props.id}>{props.name}</p>
    <p name={props.name}>{props.age}</p>
    <p age={props.age}>{props.id}</p>
    <p strenght={props.strenght}>{props.strenght}</p>

    <div>wyswietla jsie lisra</div>

    {/*   <TableBody>
          <TableCell>
            <p>{props.name}</p>
            <p>{props.age}</p>
            <p>{props.id}</p>
          </TableCell>
          <TableCell> {props.strenght} </TableCell>
        </TableBody> */}
  </div>
);

export default MonsterElement;
