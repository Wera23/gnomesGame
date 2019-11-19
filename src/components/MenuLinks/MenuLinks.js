import React from 'react';
import { Link, Typography } from  '@material-ui/core/';
import stylesLink from '../MenuLinks/MenuLinks.css'

const menuLinks = () => (
    <div className={stylesLink.links}>
        <Typography variant="h6"> 
        <Link  color="black" className={stylesLink.link}>Gnomes</Link>
        <Link  color="black" className={stylesLink.link}>Trolls</Link>
        </Typography>
    </div>
)

export default menuLinks