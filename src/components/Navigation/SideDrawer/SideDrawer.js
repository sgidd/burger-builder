import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import sideDrawerClasses from './SideDrawer.css'
const sideDrawer = (props) => {
    //..
    return (
        <div className={sideDrawerClasses.SideDrawer}>
            {/* <Logo height="11%"/> */} 

            <div className={sideDrawerClasses.Logo}>
                <Logo />
            </div>
            <nav>
                <NavigationItems />
            </nav>
        </div>
    );
};

export default sideDrawer;