import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import sideDrawerClasses from './SideDrawer.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Auxillary/Auxillary';

const sideDrawer = (props) => {
    let attachedClasses = [sideDrawerClasses.SideDrawer, sideDrawerClasses.Close];

    if(props.showSideDrawer){
        attachedClasses = [sideDrawerClasses.SideDrawer, sideDrawerClasses.Open];
    }
    return (
        <Aux>
            <Backdrop showModal ={props.showSideDrawer} clicked={props.closed}/>
            <div className={attachedClasses.join(' ')}>
            {/* <Logo height="11%"/> */} 

            <div className={sideDrawerClasses.Logo}>
                <Logo />
            </div>
            <nav>
                <NavigationItems />
            </nav>
            </div>
        </Aux>
    );
};

export default sideDrawer;