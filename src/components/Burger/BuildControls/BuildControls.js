import React from 'react';
import buildCntrlsClasses from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls =[
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'},
];

const buildControls = (props) => (
    <div className= {buildCntrlsClasses.BuildControls}>
      {
            controls.map( (ctrl) => {
                return <BuildControl 
                key = {ctrl.label} 
                label={ctrl.label} 
                // type={ctrl.type} instead pass it throug a=es6 arrow function to avoid extra loop
                added = { () => {props.ingredientAdded(ctrl.type)}}
                />
            } )
      }
    </div>
);

export default buildControls;