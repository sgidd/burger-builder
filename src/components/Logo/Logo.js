import React from 'react';

import burgerLogo from '../../assets/images/burger-logo.png';
//can not use - in import statement as below
//import burger-logo from '../../assets/images/burger-logo.png';

import logoClasses from './Logo.css';

const logo = (props) => (
    <div className={logoClasses.Logo} style={{height: props.height}}>
        <img src={burgerLogo} alt="logo"/>
    </div>
);

export default logo;