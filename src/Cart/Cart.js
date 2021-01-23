import React, { Component } from 'react';
import Total from '../Total/Total';
import './Cart.css';
import CartItem from '../CartItem/CartItem'



class Cart extends Component {

  render() {
    const selectedOptions = Object.keys(this.props.state).map((item, idx) => {
      return < CartItem item={item} idx={idx}
      key = {idx}
        {...this.props}
      />

    });
    return (
      <section className="main__summary">
        <h2>Your Cart</h2>
        {selectedOptions}
        <Total cartContents={this.props.state} />
      </section>

    );
  }

}

export default Cart;