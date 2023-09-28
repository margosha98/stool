import React from 'react';
import { useDispatch } from 'react-redux';
import  { incrementItem, decrementItem } from '../../redux/cartSlice.js'
import plus from '../../assets/plus.svg'
import minus from '../../assets/minus.svg'
import trashBin from '../../assets/trashBin.svg'
import { deleteItem } from '../../redux/cartSlice.js';

function CartItemBlock({ id, title, imgUrl, price, count }) {
  const dispatch = useDispatch()


  const onClickTodeleteItem = (id) => {
    if (window.confirm("Вы действительно хотите удалить товар?")) {
      dispatch(deleteItem(id))
    };
  
  }

  return (
    <arcticle className="cart-item">
      <img className="cart-item__img" src={imgUrl} alt="chear" />

      <div className="cart-item__info-container_column">
        <h2 className="cart-item__title">{title}</h2>
        <span className="cart-item__text  cart-item__text_buy">{price} ₽</span>
      </div>
      <div className='cart-item__info-container'>
        <button onClick={() => dispatch(decrementItem(id))} className="minus">
          <img src={minus} alt="plus.svg" />
        </button>
        <span className="cart-item__text  cart-item__text_buy minus ok">{count} </span>
        <button onClick={() => dispatch(incrementItem(id))} className="minus">
        <img src={plus} alt="plus.svg" />
        </button>
      </div>
      <p className='ok2'>{count*price} ₽</p>
      <button className='button_trash' onClick={() => onClickTodeleteItem(id)}> 
        <svg className='trash' width="30" height="42" viewBox="0 0 30 42" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.60398 8.5H24.5531C26.604 8.5 28.2155 10.2555 28.0403 12.2989L25.8975 37.2989C25.7423 39.1094 24.2274 40.5 22.4102 40.5H8.46112C6.68189 40.5 5.18578 39.1651 4.98375 37.3974L2.12661 12.3974C1.88925 10.3205 3.51355 8.5 5.60398 8.5Z" stroke="black" stroke-width="3"/>
          <line x1="27" y1="4.5" x2="2" y2="4.5" stroke="black" stroke-width="3"/>
          <line x1="9.91698" y1="32.4205" x2="7.82938" y2="17.5665" stroke="black"/>
          <line x1="14.8683" y1="33.424" x2="14.8683" y2="18.424" stroke="black"/>
          <line x1="20.2165" y1="32.3519" x2="21.5238" y2="17.409" stroke="black"/>
          <line x1="22" y1="1.5" x2="7" y2="1.5" stroke="black" stroke-width="3"/>
        </svg>
      </button>
       
    </arcticle>
  );
}

export default CartItemBlock;
