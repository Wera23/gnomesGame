import React from "react";
import { Avatar, Typography } from "@material-ui/core";
import stylesUser from '../User/User.css'

const user = props => (
  <div className={stylesUser.panel}>
    <Avatar
      alt="user"
      src={props.avatar}
      size="20"
    />
    <div className={stylesUser.dataUser}>
      <Typography variant="h6"> {props.name} </Typography>
      <Typography variant="body2"> {props.level} </Typography>
    </div>
  </div>
);

export default user;
