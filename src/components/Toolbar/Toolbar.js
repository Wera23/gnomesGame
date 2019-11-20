import React from 'react';
import stylesToolbar from '../Toolbar/Toolbar.css';
import ButtonCreateMonster from '../ButtonCreateMonster/ButtonCreateMonster';
import MenuLinks from '../MenuLinks/MenuLinks';
import Logo from '../Logo/Logo'
import User from '../User/User'

const toolbar = (props) => (
    <div className={stylesToolbar.toolbar}>
        <Logo logo={props.logo} />
        <MenuLinks />
        <ButtonCreateMonster />
        <User name={props.name} level={props.level} avatar={props.avatar}/>

    </div>
)
export default toolbar;