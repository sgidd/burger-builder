import React , {Component} from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import { Route } from 'react-router-dom';
import ContactData from './ContactData/ContactData';

class Checkout extends Component {
    state={
        ingredients : null,
        totalPrice : 0
    }

    componentWillMount () {
        console.log(this.props);
        const query = new URLSearchParams(this.props.location.search);
        const ingredients ={};
        let price =0;
       // console.log(query.entries());
        for(let param of query.entries()){
           // console.log(param);
            if(param[0] === 'price'){
                price = +param[1];
            }else{
                ingredients[param[0]] = +param[1];
            }
        }

       // console.log(ingredients);

        this.setState({ingredients: ingredients, totalPrice: price});
    }

    checkoutCancelledHandler = () => {
        this.props.history.goBack();
    }

    checkoutContinuedHandler = () => {
        this.props.history.replace('/checkout/contact-data');
    }

    render () {
        return (
            <div>
                <CheckoutSummary 
                ingredients={this.state.ingredients} 
                checkoutCancelled ={ this.checkoutCancelledHandler }
                checkoutContinued = {this.checkoutContinuedHandler }/>
                 
                 {/* <Route path={this.props.match.path + '/contact-data' } component={ContactData} /> */}
                 {/* Passing data/props through routes */}

                 <Route path={this.props.match.path + '/contact-data'}
                 render={ (routeProps) => <ContactData ingredients={this.state.ingredients}  totalPrice ={this.state.totalPrice} {...routeProps}/> }
                />

               {/* we are loading the comp manually here using render hence we will not be having history or other object there:
               2 ways to pass this 
               1. wrap the contactdata with withRouter
               2. to pass props we get on this comp here as routeProps
               routeProps contains the following objects:  history,  location,  match,  staticContext. */}
            </div>
        );
    }
}

export default Checkout;