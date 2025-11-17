import React from "react";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SearchIcon from '@mui/icons-material/Search';
import {Link} from "react-router-dom";
import { useSelector } from "react-redux";
import { displayName } from "../../features/CartSlice";

function Navbar() {
    const count=useSelector(state=>state.cart.basket)
    const display=useSelector(state=>state.cart.displayName1) || "Guest"
    let user;
    return (
        <div className="header">
          <Link to="/login">
            <div className="header__logo">
                <StorefrontIcon className="header__logoImage" fontSize="large"/>
                <h2 className="header__logoTitle">eShop</h2>
            </div>
          </Link>
            

      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>
      
      <div className="header__nav">
        <Link to="/login" style={{ textDecoration:"none" }}>
          <div className="nav__item">
            <span className="nav__itemLineOne">Hello {display}</span>
            <span className="nav__itemLineTwo">{display !=="Guest"?"Sign-Out":"Sign In"}</span>
          </div>
        </Link>
        <div className="nav__item">
          <span className="nav__itemLineOne">Your</span>
          <span className="nav__itemLineTwo">Shop</span>
        </div>
        <Link to="/checkout">
          <div className="nav__itemBasket">
            <ShoppingBasketIcon/>
            <span className="nav__itemLineTwo nav__basketCount">{count.reduce((acc,curr)=>acc+curr.quantity,0)}</span>
          </div>
        </Link>
      </div>
        </div>
    )
}

export default Navbar;
