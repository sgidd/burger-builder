import React from 'react';
import toolbarClasses from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

const toolbar = (props) => (
    <header className={toolbarClasses.Toolbar}>
        <div>MENU</div>
        {/* <Logo height="80%"/> */}
        <div className={toolbarClasses.Logo}>
            <Logo />
        </div>
        <nav className={toolbarClasses.DesktopOnly}>
            <NavigationItems />
        </nav>
    </header>
);

export default toolbar;