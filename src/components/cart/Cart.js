import React from 'react';

const Cart = (props) => {
  const { cart } = props;
  // console.log(cart);

  let total = 0;
  let totalQuantity = 0;
  for (const product of cart) {
    product.quantity = !product.quantity ? 1 : product.quantity;
    total = total + product.price * product.quantity;
    totalQuantity = totalQuantity + product.quantity;
  }

  // const quantity = cart.map(product => product.quantity)

  // const reducer = (previous, current) => previous + current.price;
  // const total = cart.reduce(reducer, 0);

  // const totalQuantity = cart.reduce(
  //   (prev, current) => (prev + !current.quantity ? 1 : current.quantity),
  //   0
  // );
  // console.log(totalQuantity);

  const shipping = total > 0 ? 20 : 0;
  const tax = total * 0.2;
  const grandTotal = total + shipping + tax;
  return (
    <div>
      <h3>Order Summary </h3>
      <p>Items orderd: {totalQuantity} </p>
      <p>Price: {total.toFixed(2)}</p>
      <p>Shipping: {shipping.toFixed(2)}</p>
      <p>Tax: {tax.toFixed(2)}</p>
      <p>Total: {grandTotal.toFixed(2)}</p>
      {props.children}
    </div>
  );
};

export default Cart;
