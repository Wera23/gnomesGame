import React from "react";
import { useSelector } from "react-redux";
import { Avatar, Typography } from "@material-ui/core";


const User = () => {
  const user = useSelector(state => state.user.current);

  return (
    <div className='user'>
      <Avatar alt="user" src={user.avatar} size="20" />
      <div className='user__user-panel'>
        <Typography variant="h6"> {user.name} </Typography>
        <Typography variant="body2"> {user.level} </Typography>
      </div>
    </div>
  );
};

export default User;
