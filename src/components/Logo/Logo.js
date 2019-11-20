import React from "react";
import { Avatar, Typography, Grid } from '@material-ui/core/';
import stylesLogo from '../Logo/Logo.css';



const logo = props => (
  <div>
    <Grid container justify="center" alignItems="center">
      <Avatar className={stylesLogo.logo} />
      <Typography> {props.logo} </Typography>
    </Grid>
   
  </div>
);

export default logo;
