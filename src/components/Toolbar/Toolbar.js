import React from 'react';
import stylesToolbar from '../Toolbar/Toolbar.css';
import ButtonCreateMonster from '../ButtonCreateMonster/ButtonCreateMonster';
import MenuLinks from '../MenuLinks/MenuLinks';
import User from '../User/User'

const toolbar = (props) => (
    <div className={stylesToolbar.toolbar}>

        <MenuLinks />
        <ButtonCreateMonster />
        <User name={props.name} level={props.level} avatar={props.avatar}/>

    </div>
)

export default toolbar;