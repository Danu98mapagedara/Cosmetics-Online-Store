import React from 'react'
import './Home.css'
import  images  from '../../constants/images'
import SingleProduct from '../SingleProduct';
import { useCart } from '../../context/Context';
import Homeslider from '../Homeslider/Homeslider';

const Home = () => {

const  {
    state:{products}
}=useCart();



  return (
   
    <div className='home-container' >
<div className="banner">
  <img src={images.banner} alt="" /> 
</div>
  <div className="banner2" style={{backgroundImage:`url(${images.banner2})`, width:'100%',height:'50%'}} >

      <h1>Glow Range   </h1>
      <h5>Our latest Glowing Skincare Range is made to help you get your glow on!</h5>
      
      </div> 



<div className="all-prod1">
  <div className="all-prod-head">
  <h1>All Products</h1>
  <p>Explore our collection of products</p>
  </div>

  <div className="prod-card1">
{products.map((product) =>(
            <SingleProduct product={product} key={product.id}  />
            ))}

  </div>

</div>
     
<Homeslider/>
  
    </div>
  )
}

export default Home