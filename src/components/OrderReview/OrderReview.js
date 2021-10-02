import React from 'react';
import { useHistory } from 'react-router';
import useCart from '../../hooks/useCart/useCart';
import useProducts from '../../hooks/useProducts/useProducts';
import { clearTheCart, deleteFromDb } from '../../utilities/fakedb';
import Cart from '../cart/Cart';
import ReviewItem from '../reviewItem/ReviewItem';

const OrderReview = () => {
  const [products] = useProducts();
  const [cart, setCart] = useCart(products);

  const history = useHistory();

  const handleRemove = (key) => {
    const newCart = cart.filter((product) => product.key !== key);
    setCart(newCart);
    deleteFromDb(key);
  };

  const handleOrder = () => {
    history.push('/placeorder');
    setCart([]);
    clearTheCart();
  };

  return (
    <div className="shopping-container">
      <div className="product-container">
        {cart.map((product) => (
          <ReviewItem
            key={product.key}
            handleRemove={handleRemove}
            product={product}
          ></ReviewItem>
        ))}
      </div>
      <div className="order-container">
        <Cart cart={cart}>
          <button onClick={handleOrder} className="btn-regular">
            Place order
          </button>
        </Cart>
      </div>
    </div>
  );
};

export default OrderReview;
