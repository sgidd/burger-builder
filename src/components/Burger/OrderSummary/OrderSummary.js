import React from 'react';
import Aux from '../../../hoc/Auxillary';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
    const ingredientsSummary = Object.keys(props.ingredients)
    .map((igKey) => {
    return (
        <li key={igKey}>
            <span style={{textTransform : 'capitalize'}}>{igKey}</span> : {props.ingredients[igKey]}
        </li>
    );
    });

    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A delicous burger with the following ingredients:</p>
            <ul>
                {ingredientsSummary}
            </ul>
            <p><strong>Total Price: {props.totalPrice.toFixed(2)}</strong></p>
            <p>Continue to checkout?</p>
            <Button btnType="Danger" btnClicked={props.purchaseCancelled}>CANCEL</Button>
            <Button  btnType="Success" btnClicked={props.purchaseContinued}>CONTINUE</Button>

        </Aux>
    );

};

export default orderSummary;