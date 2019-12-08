import React from 'react';
import burgerClasses from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    return (
        <div className= {burgerClasses.Burger}>
            <BurgerIngredient type="bread-top" />
            <BurgerIngredient type="meat" />
            <BurgerIngredient type="cheese" />
            <BurgerIngredient type="salad" />
            <BurgerIngredient type="bacon" />
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
};


export default burger;