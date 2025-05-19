import React from 'react'
import { useCart } from '../context/Context';
import './card.css';
import  {useNavigate} from 'react-router-dom';

const SingleProduct = ({product}) => {

const {
    state:{cart},
    dispatch,
    }=useCart();


    const navigate=useNavigate();
    const handleClick=(id)=>{
        navigate(`/product/${id}`)
    }

  return (
    <div className="singleProduct">

      <div className="card" >
        <img src={product.image} alt={product.username} />
       
        <p>{product.productname}</p>
         <p>RS.{product.price}</p>
       
        <button
        className='view-btn'
         onClick={()=>handleClick(product.id)}
        >
         View Product
        </button>
 
      </div>

    
    </div>
  )
}

export default SingleProduct;