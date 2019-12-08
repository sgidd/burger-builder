import React, {Component} from 'react';

import burgIngClasses from './BurgerIngredient.css';
import PropTypes from 'prop-types';

class BurgerIngredient extends Component {

    render() {

        let ingredient = null;

    switch(this.props.type){
        case ('bread-bottom'):
            ingredient = <div className = {burgIngClasses.BreadBottom}></div>
            break;
        case ('bread-top'):
            ingredient = (
                <div className={burgIngClasses.BreadTop}>
                    <div className={burgIngClasses.Seeds1}></div>
                    <div className={burgIngClasses.Sedds2}></div>
                </div>
            );
            break;
        case ('meat'):
            ingredient = <div className={burgIngClasses.Meat}></div>
            break;
        case ('cheese'):
            ingredient = <div className={burgIngClasses.Cheese}></div>
            break;
        case ('salad'):
            ingredient = <div className={burgIngClasses.Salad}></div>
            break;
        case ('bacon'):
            ingredient = <div className={burgIngClasses.Bacon}></div>
            break;
        default:
            ingredient = null;
    }

    return ingredient;

    }
}


BurgerIngredient.propTypes ={
    type : PropTypes.string.isRequired
};

export default BurgerIngredient;