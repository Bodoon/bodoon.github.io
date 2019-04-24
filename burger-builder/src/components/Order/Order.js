import React from 'react';

import classes from './Order.module.scss';

const order = (props) => {
    const ingredients = [];

    for (let ingredientName in props.ingredients) {
        ingredients.push({
            name: ingredientName,
            amount: props.ingredients[ingredientName]
        });
    }

    const ingredientOutput = ingredients.map(ig => {
        return <span key={ig.name} className={classes.OrderIngredients}>{ig.name} {ig.amount}</span>
    });

    return (
        <div className={classes.Order}>
            <p>Ingredients:</p>
            {ingredientOutput}
            <p>Price: <strong>USD {props.price.toFixed(2)}</strong></p>
        </div>
    );
};

export default order;