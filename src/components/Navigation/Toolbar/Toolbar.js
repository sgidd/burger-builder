import React from 'react';
import toolbarClasses from './Toolbar.css';

const toolbar = (props) => (
    <header className={toolbarClasses.Toolbar}>
        <div>MENU</div>
        <div>LOGO</div>
        <nav>
            ...
        </nav>
    </header>
);

export default toolbar;