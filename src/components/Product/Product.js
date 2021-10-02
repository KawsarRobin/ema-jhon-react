import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Rating from 'react-rating';
import './Product.css';

const Product = (props) => {
  //   console.log(props.product);

  const { name, img, seller, stock, price, star } = props.product;
  return (
    <div className="product">
      <div>
        <img src={img} alt="" />
      </div>
      <div className="product-details">
        <h4 className="product-name">{name}</h4>
        <p>
          <small>by {seller}</small>
        </p>
        <p className="product-price">${price}</p>
        <p>
          <small>only {stock} left in stock, order soon</small>
        </p>
        <Rating
          readonly
          emptySymbol="far fa-star icon-color"
          fullSymbol="fas fa-star icon-color"
          initialRating={star}
        ></Rating>
        <br /> <br />
        <button
          onClick={() => props.handleAddToCart(props.product)}
          className="btn-regular"
        >
          <FontAwesomeIcon icon={faShoppingCart} /> add to cart
        </button>
      </div>
    </div>
  );
};

export default Product;
