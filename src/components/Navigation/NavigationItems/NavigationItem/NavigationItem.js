import React from 'react';
import classes from './NavigationItem.css'

import { NavLink } from 'react-router-dom';

const navigationItem = (props) => (
    <li className={classes.NavigationItem}>
        {/* <a 
        href={props.link}
        className={props.active ? classes.active : null}>{props.children}</a> */}

        <NavLink
        to={props.link}  
        // to is treated as prefix here so active will apply on bith when clicked on orders so use exact keyword or props 
        //exact //but this will add on all li so pass it from outside to just apply on "/" or one specific 
        exact={props.exact}
        activeClassName={classes.active}>
            {props.children}
        </NavLink>
    </li>
);

export default navigationItem;