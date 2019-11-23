import React from 'react';
import { Link } from  '@material-ui/core/';
import stylesToolbar from '../Styles/Toolbar.css'

const menuLinks = () => (
    <div className={stylesToolbar.linkField}>

       
        
       <Link className={stylesToolbar.link}>Gnomes</Link>
        <Link className={stylesToolbar.link}>Trolls</Link>
       
    </div>
)

export default menuLinks