import React from "react";
import { Avatar, Typography, Grid } from "@material-ui/core/";

const logo = props => (
  <div>
    <Grid container justify="center" alignItems="center">
      <Avatar className=''>j!</Avatar>
      <Typography> {props.logo} </Typography>
    </Grid>
  </div>
);

export default logo;
