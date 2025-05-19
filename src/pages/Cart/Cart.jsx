import React,{useState,useEffect} from 'react'
import { useCart } from '../../context/Context'

import './cart.css'


const Cart = () => {

const {
    state:{cart},
    dispatch,

}=useCart();


const increaseQty = (item) => {
  dispatch({type:"UPDATE_CART_QUANTITY",payload:{id:item.id,quantity:item.buyQuantity+1}})

}
const decreaseQty = (item) => {
if(item.quantity > 1) {
  dispatch({ type: "UPDATE_CART_QUANTITY", payload: { id: item.id,quantity:item.buyQuantity-1 } });


}
}


const [total, setTotal] = useState(0);

const totalvalue=0;
useEffect(() => {
  const totalvalue = cart.reduce((acc, item) => acc + item.price * item.buyQuantity, 0);
  setTotal(totalvalue);
}, [cart]); 

  console.log("total value:",totalvalue)

 return (
    <div className='cart-container'>
      <div className="cart-head">
        <h1>My Cart</h1>
      </div>
      <div className="cart-content">
        <div className="cart-left">
          {cart.map((item) => (
            <div className="cart-item-row" key={item.id}>
              <img src={item.image} alt={item.productname} width={100} />
              <div className="cart-item-details">
                <p className='p-name'>{item.productname}</p>
                <p>Price: {item.price}</p>
             <div className="quantity-controls">
  <button
    onClick={() => decreaseQty(item)}
    disabled={item.buyQuantity <= 1}
  >
    -
  </button>
  <span>{item.buyQuantity}</span>
  <button
    onClick={() => increaseQty(item)}
    disabled={item.buyQuantity >= item.quantity}
  >
    +
  </button>
</div>
<p>Total: {item.price * item.buyQuantity} LKR</p>

              </div>
              <button className="remove-btn" onClick={() => dispatch({ type: "REMOVE_FROM_CART", payload: { id: item.id } })}>
                Remove
              </button>
            </div>
          ))}
          {cart.length > 0 && (
            <button className="clear-button" onClick={() => dispatch({ type: "CLEAR_CART" })}>
              Clear Cart
            </button>
          )}
        </div>

        <div className="cart-right">
          <h1 className='subtotal'>SubTotal: ({cart.length} items)</h1>
          <h3 className='total-value'>Total: {total} LKR</h3>
         
         
          <button
  className='checkout-btn'
 onClick={async () => {
  const res = await fetch('http://localhost:5000/create-checkout-session', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ cartItems: cart }),
  });
  const data = await res.json();
  window.location.href = data.url;
}}
>
  Proceed to Checkout
</button>

        </div>
      </div>
    </div>
  );
}

export default Cart
