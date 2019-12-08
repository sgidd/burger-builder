import React from 'react';
import backdropClasses from './Backdrop.css';

const backdrop = (props) => (
    props.showModal ? <div className={backdropClasses.Backdrop} onClick={props.clicked}></div> : null
);

export default backdrop;