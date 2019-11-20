import React from 'react';
import { Link, Typography } from  '@material-ui/core/';
import styleToolbar from '../Styles/Toolbar.css'

const menuLinks = () => (
    <div>
        <Typography variant="h6"> 
        <Link className={styleToolbar.link}>Gnomes</Link>
        <Link className={styleToolbar.link}>Trolls</Link>
        </Typography>
    </div>
)

export default menuLinks