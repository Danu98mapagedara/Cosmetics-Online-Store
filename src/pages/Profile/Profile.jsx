import React from 'react'
import { useAuth } from '../../context/AuthContext'
import { useCart } from '../../context/Context';
import './Profile.css'

const Profile = () => {

const {state:{cart}

}=useCart();


    const { state: auth}=useAuth();
    console.log("my auth state:", auth)

  return (
    <div className='profile-container'>

        <h1>Your  Profile</h1>
        <div className="profile-details">
            <p><strong>Name:</strong> {auth.user.name}</p>
            <p><strong>Email:</strong> {auth.user.email}</p>
            <p><strong>Phone:</strong> {auth.user.phone}</p>
            <p><strong>Address:</strong> {auth.user.address}</p>
            </div>


            <div className="order-details">
            <h2>Your Orders</h2>
            <div className="product-details">
 {cart.map((item) => (

     <div className="product-row" key={item.id}>
      <img src={item.image} alt={item.productname} width={100} />
      <div className="product-info">
        <p className='p-name'>{item.productname}</p>
        <p>Price: {item.price}</p>
      </div>
      <div className="profile-btn">
        <button>Confirm Received</button>
<a
  href={`https://www.17track.net/en/track?nums=${item.trackingNumber}`}
  target="_blank"
  rel="noopener noreferrer"
>
  <button>Track Your Order</button>
</a>

      </div>
    </div>
))}
               
            </div>
            </div>
    </div>
  )
}

export default Profile