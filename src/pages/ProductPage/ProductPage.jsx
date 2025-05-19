import React from 'react'
import product from '../../constants/product'
import './ProductPage.css'
import { useParams } from 'react-router-dom'
import { useCart } from '../../context/Context';
import { FaWhatsapp } from 'react-icons/fa';

const ProductPage = () => {

 
  const { dispatch } = useCart();

  const { id } = useParams();
  const ProductDetails = product.find((item) => item.id === Number(id));

  console.log("Get product data",ProductDetails);

  return (
   <div className="productpage">
      <div className="banner-msg">
        You are just Rs {4050 - ProductDetails.price}.00 away from free shipping!
      </div>
      <div className="productpage-container">
        <div className="product-image">
          <img src={ProductDetails.image} alt={ProductDetails.name} />
        </div>
        <div className="product-details">
          <h1>{ProductDetails. productname}</h1>
          <p>{ProductDetails.rating}  Reviews</p>
          <p className="price">Rs {ProductDetails.price}.00</p>
          <h3 className="description">  <strong>Description:</strong> <br />{ProductDetails.description}</h3>
          <p className="ingredients">
            <strong>Ingredients:</strong> {ProductDetails.ingredients}
          </p>
<h3>Usage</h3>
         <ul>
    {ProductDetails.usage.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </ul>
          <button
            className="add-to-cart"
            onClick={() => dispatch({ type: 'ADD_TO_CART', payload: ProductDetails })}
          >
            Add to Cart
          </button>
        </div>
      </div>

      <a
        href="https://web.whatsapp.com"
        className="whatsapp-icon"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp size={36} />
      </a>
    </div>
  );
}

export default ProductPage