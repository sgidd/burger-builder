import React from 'react';
import toolbarClasses from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';


const toolbar = (props) => (
    <header className={toolbarClasses.Toolbar}>
        {/* <div onClick={props.toggleSideDrawer}>MENU</div> */}
        <DrawerToggle menuClicked={props.toggleSideDrawer}/>
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