import React from 'react';

import burgerLogo from '../../assets/images/burger-logo.png';
//can not use - in import statement as below
//import burger-logo from '../../assets/images/burger-logo.png';

import logoClasses from './Logo.css';

const logo = (props) => (
    <div className={logoClasses.Logo}>
        <img src={burgerLogo} />
    </div>
);

export default logo;