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
      <p>Curent Price : <strong>{props.price.toFixed(2)}</strong></p>
      {
            controls.map( (ctrl) => (
                 <BuildControl 
                key = {ctrl.label} 
                label={ctrl.label} 
                // type={ctrl.type} instead pass it throug a=es6 arrow function to avoid extra loop
                added = { () => {props.ingredientAdded(ctrl.type)}}
                removed = { () => {props.ingredientRemoved(ctrl.type)}}
                disabled = {props.disabledObj[ctrl.type]}/>
             ))
      }

      <button 
      className={buildCntrlsClasses.OrderButton}
      disabled = {!props.purchasable}>ORDER NOW</button>
    </div>
);

export default buildControls;