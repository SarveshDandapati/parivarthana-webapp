import React from 'react';
import cartOutline from '../assests/cart-outline.svg';
import cartFilled from '../assests/cart-filled.svg';
import menu from '../assests/menu.svg';
import "./NavBar.css";


function NavBar(){

    return(
        
            <section className="nav">
                <div className="menu-icon"><img src={menu} align="left"  alt="menu"/></div>
                <h1 align="center">Parivarthana</h1>
                <div className="cart-div"><img src={cartOutline} align="right" onMouseOver={e => e.currentTarget.src = cartFilled}
              onMouseOut={e => e.currentTarget.src = cartOutline} alt="cart" /></div>
            </section>
    );
    
}

export default NavBar;