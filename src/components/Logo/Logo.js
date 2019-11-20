import React from "react";
import { Avatar, Typography, Grid } from '@material-ui/core/';
import styleToolbar from '../Styles/Toolbar.css'


const logo = props => (
  <div>
    <Grid container justify="center" alignItems="center">
      <Avatar className={styleToolbar.logo} />
      <Typography> {props.logo} </Typography>
    </Grid>
   
  </div>
);

export default logo;
