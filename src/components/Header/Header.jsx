import React from 'react';
import logo from '../../assets/Logo.png';
import cart from '../../assets/cart.svg';
import Search from '../Search/Search.jsx';

function Header() {
  return (
    <div className="header">
      <img className="header__logo" src={logo} alt="stool-logo" />
      <Search />
      <a className="header__cart">
        <span>100 ₽</span>
        <div className="button__delimiter"></div>
        <img src={cart} alt="cart.svg" />
        <span> 1</span>
      </a>
    </div>
  );
}

export default Header;
