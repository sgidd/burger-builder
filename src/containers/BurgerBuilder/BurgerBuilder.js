import React , {Component} from 'react';

import Aux from '../../hoc/Auxillary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';


const INGREDIENT_PRICES = {
    salad : 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon:0.7
}
class BurgerBuilder extends Component {
    // constructor(ptops) {
    //     super(props);
    //     this.state ={...}
    // }

    state = {
        ingredients : {
            salad :0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice : 4,
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount +1 ;
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = updatedCount;

        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;

        this.setState({totalPrice : newPrice , ingredients : updatedIngredients});

    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];

        //we will face if we try to ingredient when not there bcoz state will -ve and cant create array from -ve value
        if(oldCount <=0){
            return; //removeIngredientHandler ends here only if val is <=0 , rest lines wont execute
        }
        const updatedCount  = oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = updatedCount;

        const priceRemoval =  INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceRemoval;

        this.setState({totalPrice : newPrice , ingredients : updatedIngredients});


    }



    render(){

        const disabledInfo = {
            ...this.state.ingredients
        }

        for(let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0;
        } 
        //{salad: true, meat:false, ...}
        return (
            <Aux>
                <Burger ingredients = {this.state.ingredients}/>
                {this.state.totalPrice}
                <BuildControls 
                    ingredientAdded = {this.addIngredientHandler}
                    ingredientRemoved = {this.removeIngredientHandler}
                    disabledObj = {disabledInfo}
                />
            </Aux>
        );
    }
}

export default BurgerBuilder;