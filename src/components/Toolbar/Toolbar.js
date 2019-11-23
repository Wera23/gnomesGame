import React from 'react';
import MenuLinks from '../MenuLinks/MenuLinks';
import Logo from '../Logo/Logo'
import User from '../User/User';
import CreateNewMonster from '../CreateNewMonster/CreateNewMonster'

const toolbar = (props) => (
    <div className='toolbar'>
        <Logo logo={props.logo} />
        <MenuLinks />
        <CreateNewMonster nameNew={props.nameNew} ageNew={props.ageNew} strenghtNew={props.strenghtNew} />
        <User name={props.name} level={props.level} avatar={props.avatar}/>

    </div>
)
export default toolbar;
