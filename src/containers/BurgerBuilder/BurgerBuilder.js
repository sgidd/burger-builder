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
        purchasable : false,
    }

    updatePurchaseState = (ingredients) => {
        console.log(ingredients);
        const sum = Object.keys(ingredients) //converting ing object to array of its keys
            .map( (igKey) => {
              return  ingredients[igKey];
            }) // returning each key values , salad -2 and creating array of all values
            .reduce((sum,el)=> { //sum is 0 at initial and el is each element of above mapped array ie values of each ing type
                return sum + el;
            }, 0);

            //or

            // const sum = Object.values(ingredients)
            // .map((igval) => {
            //     return igval;
            // })
            // .reduce((sum,el) => {
            //     return sum + el;
            // }, 0);

            console.log(sum);

        this.setState({purchasable: sum>0});
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

        this.updatePurchaseState(updatedIngredients);
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

        this.updatePurchaseState(updatedIngredients);
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
              
                <BuildControls 
                    ingredientAdded = {this.addIngredientHandler}
                    ingredientRemoved = {this.removeIngredientHandler}
                    disabledObj = {disabledInfo}
                    price = {this.state.totalPrice}
                    purchasable = {this.state.purchasable}
                />
            </Aux>
        );
    }
}

export default BurgerBuilder;