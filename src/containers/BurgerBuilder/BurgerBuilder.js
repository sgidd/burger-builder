import React , {Component} from 'react';

import Aux from '../../hoc/Auxillary/Auxillary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';
import axios from '../../axios-orders';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';



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
        ingredients : null,
        totalPrice : 4,
        purchasable : false,
        purchasing: false,
        loading:false,
        error:false
    }

    componentDidMount () {
        //console.log(props)
        //this comp is rendered through routing so only this will get the routing props with location, history, match but its children like burger.js
        //to access them there user withRouter hoc and wrap the comp in export statement after import

        axios.get('/ingredients.json')
            .then(response => {
                this.setState({ingredients : response.data})
            })
            .catch(error => {
                this.setState({error: true});
            });
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

            //or use Object.keys instead
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


    // purchaseHandler (){
    //     this.setState({purchasing : true})
    // } //error: Cannot read property 'setState' of undefined


    purchaseHandler = () => {
        this.setState({purchasing : true});
    }

    purchaseCancelHandler = () => {
        this.setState({purchasing:false});
    }

    purchaseContinueHandler = () =>{
        //alert('You Continue!');
        // this.setState({loading: true});
        // const order ={
        //     ingredients : this.state.ingredients,
        //     price : this.state.totalPrice,
        //     customer: {
        //         name : 'Sunil Gidd',
        //         address: {
        //             street: 'FCI Road',
        //             zipcode: '560067',
        //             country: 'India'
        //         },
        //         email: 'sunilgidd051@gmail.com'
        //     },
        //     deliveryMethod: 'Fastest'
        // }

        // axios.post('/orders.json', order)
        //     .then(response => {
        //         //console.log(response);
        //         this.setState({loading: false, purchasing: false});
        //     })
        //     .catch(error => {
        //        // console.log(error);
        //         this.setState({loading: false, purchasing:false});
        //     })

        // this.props.history.push('/checkout');

        //255.passing ing via query params
        const queryParams = [];
        for(let i in this.state.ingredients){
            // console.log(i);
            queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingredients[i]))
        }
        console.log(queryParams);

        const queryString = queryParams.join('&');
        console.log(queryString);

        this.props.history.push({
            pathname: '/checkout',
            search: '?' + queryString
        });
    }

    render(){

        const disabledInfo = {
            ...this.state.ingredients
        }

        for(let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0;
        } 
        //{salad: true, meat:false, ...}

        let orderSummary = null;
        

    

        let burger = this.state.error ? <p>Ingredient's can't be loaded!</p> : <Spinner />;

        if(this.state.ingredients){
            burger = (
                <Aux>
                    <Burger ingredients = {this.state.ingredients}/>
                  
                    <BuildControls 
                      ingredientAdded = {this.addIngredientHandler}
                      ingredientRemoved = {this.removeIngredientHandler}
                      disabledObj = {disabledInfo}
                      price = {this.state.totalPrice}
                      purchasable = {this.state.purchasable}
                      ordered ={this.purchaseHandler}
                    />
                </Aux>
            );

            orderSummary = <OrderSummary 
                    ingredients={this.state.ingredients} 
                    purchaseCancelled = {this.purchaseCancelHandler}
                    purchaseContinued ={this.purchaseContinueHandler}
                    totalPrice={this.state.totalPrice}
                    />
        }

        if(this.state.loading){
            orderSummary = <Spinner />
        }


        return (
            <Aux>
                <Modal showModal={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    {orderSummary}
                </Modal>
                
                {burger}
                
            </Aux>
        );
    }
}

export default withErrorHandler(BurgerBuilder, axios);


//this comp is rendered through routing so only this will get the routing props with location, history, match but its children like burger.js will not 
//to access them there or any comp which are not appsed through routing (means not defined Route for them )  user withRouter hoc and wrap the comp in export statement after import