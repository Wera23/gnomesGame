import React from "react";
import { useSelector } from "react-redux";
import { Avatar } from "@material-ui/core";
import { StyledTypography } from '../Forms/StyledTypography'


const User = () => {
  const user = useSelector(state => state.user.current);

  return (
    <div className='user'>
      <Avatar alt="user" src={user.avatar} size="20" />
      <div className='user__user-panel'>
        <StyledTypography variant="h3"> {user.name} </StyledTypography>
        <StyledTypography variant="h4"> {user.level} </StyledTypography>
      </div>
    </div>
  );
};

export default User;
