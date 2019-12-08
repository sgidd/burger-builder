import React from 'react';
import burgerClasses from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {

    //recieving ingredients props is not array loop through using map, instaed we need to tranform it into array

    const transformedIngredients = Object.keys(props.ingredients) //this will give the array of keys of paassed object - it extracts the keys of object passed and provide them all in array
    .map( igKey => {
        return [...Array(props.ingredients[igKey])] //Array() method provides array of the empty spaces of the number passed - Array(2) provides array of 2 empty spaces
        //here we are spe=reading the array to loop through - for cheese 2 we need to array of 2 elements so that we can get 2 cheese ing
        .map( (_, i) => {
            return <BurgerIngredient key={igKey + i} type={igKey} />
        });
    });

    console.log(transformedIngredients)
    return (
        <div className= {burgerClasses.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
};


export default burger;