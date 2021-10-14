import './Header.css'
import React from 'react';
import logo from '../../img/logo2.png'
import cart from '../../img/ICON/shopping-cart.png'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header">
            <img src={logo} height="40px" alt="Hot onion logo" className="logo" />
            <img src={cart} height='18px' alt="" />
            <Link to='#'>Login</Link>
            <Link to='#' className="btn-regular" >Sign Up</Link>



        </div>
    );
};

export default Header;