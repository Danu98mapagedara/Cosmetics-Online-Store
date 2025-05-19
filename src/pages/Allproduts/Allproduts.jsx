import React from 'react'
import ProductPage from '../ProductPage/ProductPage'
import { useCart } from '../../context/Context';
import images from '../../constants/images';
import './prod.css'

const Allproduts = () => {

const  {
    state:{products},
    dispatch,
}=useCart();



  return (
    <div className='all-prod'>
{products.map((product) =>(
        <div className="prod-card" key={product.id}>
            <div className="prod-image">
   <img src={product.image} alt="" width={100} />
            </div>
     <div className="prod-row">
        <h3>{product.productname}</h3>
          <p>Price: {product.price}</p>
          <button  onClick={()=>  dispatch({ type: "ADD_TO_CART", payload: product })} >Add Cart</button>
        </div>    
             </div>
            ))}

 
    </div>
  )
}

export default Allproduts