import React from 'react';
import buildCntrlClasses from './BuildControl.css'


const buildControl = (props) => (
    <div className={buildCntrlClasses.BuildControl}>
        <div className={buildCntrlClasses.Label}>{props.label}</div>
        <button className={buildCntrlClasses.Less} onClick= {props.removed}>Less</button>
        <button className={buildCntrlClasses.More} onClick={props.added}>More</button>
    </div>
);

export default buildControl;