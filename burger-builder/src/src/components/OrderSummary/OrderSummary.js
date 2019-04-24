import React, {Component} from 'react';

import Button from '../../components/UI/Button/Button';
import Aux from '../../hoc/Auxiliary/Auxiliary'

class OrderSummary extends Component {


    render() {
        const ingredientSummary = Object.keys(this.props.ingredients)
            .map(igKey => {
                return <li key={igKey}>
                    <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {this.props.ingredients[igKey]}
                </li>
            });
        return (
            <Aux>
                <h2>Your Order</h2>
                <p>A delicios burder with the following ingredients:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Total Price: {this.props.price.toFixed(2)}</strong></p>
                <p>Continue to Checkout?</p>
                <Button btnType="Danger" clicked={this.props.modalClose}>CANCEL</Button>
                <Button clicked={this.props.makeOrder} btnType="Success">CONTINUE</Button>
            </Aux>
        )
    }
};

export default OrderSummary;