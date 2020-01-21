import React from 'react';
import MenuLinks from '../MenuLinks/MenuLinks';
import Logo from '../Logo/Logo'
import User from '../User/User';
import CreateNewMonster from '../CreateNewMonster/CreateNewMonster'

interface IProps {
logo: any;
name: string;
age: number;
strenght: number;
gnomeSubmit: Function;
id: number;

}

const Toolbar = (props: IProps, gnomeSubmit: Function, id: number) => (
    <div className='toolbar'>
        <Logo logo={props.logo} />
        <MenuLinks />
       {/* <CreateNewMonster nameNew={props.nameNew} strenghtNew={props.strenghtNew}  ageNew={props.ageNew}  /> */}
       <CreateNewMonster name={props.name} age={props.age} strenght={props.strenght} gnomeSubmit={props.gnomeSubmit} id={props.id}/>
        <User />
    </div>
)
export default Toolbar;
