import React from 'react';
import toolbarClasses from './Toolbar.css';
import Logo from '../../Logo/Logo';

const toolbar = (props) => (
    <header className={toolbarClasses.Toolbar}>
        <div>MENU</div>
        {/* <div>LOGO</div> */}<Logo />
        <nav>
            ...
        </nav>
    </header>
);

export default toolbar;