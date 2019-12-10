import React, {Component} from 'react';
import Aux from '../../../hoc/Auxillary/Auxillary';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
    //Performance Imptovement - shouldCompUpdate has been implemented in its parent com ie Modal so this comp no need to be the classful
    //can be converted to functional and remove the compWillUp lifecycle hook

    //Wrapping element controls the updating of wrapped element so no need to use life hooks in ordersummary or convert it to func comp
    componentWillUpdate(){
        console.log('[OrderSummary] compWillUpdate()');
    }
    render () {

        const ingredientsSummary = Object.keys(this.props.ingredients)
        .map((igKey) => {
        return (
            <li key={igKey}>
                <span style={{textTransform : 'capitalize'}}>{igKey}</span> : {this.props.ingredients[igKey]}
            </li>
        );
        });

        return(
            <Aux>
                <h3>Your Order</h3>
                <p>A delicous burger with the following ingredients:</p>
                <ul>
                    {ingredientsSummary}
                </ul>
                <p><strong>Total Price: {this.props.totalPrice.toFixed(2)}</strong></p>
                <p>Continue to checkout?</p>
                <Button btnType="Danger" btnClicked={this.props.purchaseCancelled}>CANCEL</Button>
                <Button  btnType="Success" btnClicked={this.props.purchaseContinued}>CONTINUE</Button>
            </Aux>
        );
    }
} 
export default OrderSummary;




// const orderSummary = (props) => {
//     const ingredientsSummary = Object.keys(props.ingredients)
//     .map((igKey) => {
//     return (
//         <li key={igKey}>
//             <span style={{textTransform : 'capitalize'}}>{igKey}</span> : {props.ingredients[igKey]}
//         </li>
//     );
//     });

//     return (
//         <Aux>
//             <h3>Your Order</h3>
//             <p>A delicous burger with the following ingredients:</p>
//             <ul>
//                 {ingredientsSummary}
//             </ul>
//             <p><strong>Total Price: {props.totalPrice.toFixed(2)}</strong></p>
//             <p>Continue to checkout?</p>
//             <Button btnType="Danger" btnClicked={props.purchaseCancelled}>CANCEL</Button>
//             <Button  btnType="Success" btnClicked={props.purchaseContinued}>CONTINUE</Button>

//         </Aux>
//     );

// };

// export default orderSummary;