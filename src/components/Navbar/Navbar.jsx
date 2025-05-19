import React, { useState } from 'react';
import './Navbar.css';
import { Link, NavLink } from 'react-router-dom';
import { FiShoppingCart } from "react-icons/fi";
import Login from '../../pages/Login/Login';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [showLogin, setShowLogin] = useState(false);

    return (
        <div className='nav-container'>
            <div className='nav-logo'>
                {/* <img src={images.logo} alt="Logo" /> */}
            </div>

            <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
                <NavLink to='/' className='nav-link'>Home</NavLink>
                <NavLink to='/all' className='nav-link'>Shop All Products</NavLink>
                <NavLink to='/blogs' className='nav-link'>Blogs</NavLink>
                <NavLink to='/pramotions' className='nav-link'>Pramotion</NavLink>
                <NavLink to='/contactus' className='nav-link'>Contact Us</NavLink>


               <button onClick={()=>setShowLogin(true)}  className='nav-link' style={{ background: 'none', border: 'none', cursor: 'pointer' }}>Login</button>
                
                <NavLink to='/profile' className='nav-link'>Profile</NavLink>
                  <NavLink to='/cart' className='nav-link'><FiShoppingCart size={30} /></NavLink>
            </div>
<Login isOpen={showLogin} onClose={()=>setShowLogin(false)}   />
           
            
        </div>
    );
};

export default Navbar;
