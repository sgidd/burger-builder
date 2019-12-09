import React from 'react';
import btnClasses from './Button.css';

const button = (props) => (
        <button 
        className={[btnClasses.Button , btnClasses[props.btnType]].join(' ')}
        onClick={props.btnClicked}>{props.children}</button>
);

export default button;