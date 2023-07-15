import React from 'react';
import logo from '../../assets/Logo.png';
import cart from '../../assets/cart.svg';
import Search from '../Search/Search.jsx';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="header">
      <Link className="logo__cantainer" to="/">
        <img className="header__logo" src={logo} alt="stool-logo" />
      </Link>
      <Search />

      <Link to="cart" className="header__cart">
        <span>35000 ₽</span>
        <div className="button__delimiter"></div>
        <img src={cart} alt="cart.svg" />
        <span> 1</span>
      </Link>
    </div>
  );
}

export default Header;
