import React from 'react';
import MenuLinks from '../MenuLinks/MenuLinks';
import Logo from '../Logo/Logo'
import User from '../User/User';
import CreateNewMonster from '../CreateNewMonster/CreateNewMonster'

const Toolbar = (props) => (
    <div className='toolbar'>
        <Logo logo={props.logo} />
        <MenuLinks />
        <CreateNewMonster nameNew={props.nameNew} ageNew={props.ageNew} strenghtNew={props.strenghtNew} />
        <User />
    </div>
)
export default Toolbar;
