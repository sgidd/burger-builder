import React from 'react';
import toolbarClasses from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

const toolbar = (props) => (
    <header className={toolbarClasses.Toolbar}>
        <div>MENU</div>
        {/* <div>LOGO</div> */}<Logo />
        <nav>
            <NavigationItems />
        </nav>
    </header>
);

export default toolbar;