import React from 'react';
import cartOutline from '../../assests/cart-outline.svg';
import cartFilled from '../../assests/cart-filled.svg';
import menu from '../../assests/menu.svg';
import "./NavBar.css";
import Menu from '../Menu/Menu.jsx';
import { Link } from "react-router-dom";

class NavBar extends React.Component{

    render(){
      return(
        <section className="nav">
                <div className="menu-icon"><img src={menu} align="left"  alt="menu"/></div>
                <h1 align="center" className='logo'>Parivarthana</h1>
                <div className="cart-div"><img src={cartOutline} align="right" onMouseOver={e => e.currentTarget.src = cartFilled}
              onMouseOut={e => e.currentTarget.src = cartOutline} alt="cart" /></div>
              <div className='nav-links'>
                <ul className="list-link">
                  <li><Link to="/">Home</Link></li>  
                  <li><Link to="/product">Products</Link></li>  
                  <li><Link to="/order">Order</Link></li>
                  <li><Link to="/signUp">signUp</Link></li>
                </ul>
              </div>
        </section>
        
      );
    }    
}

export default NavBar;