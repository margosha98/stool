import React from 'react';
import CartItemBlock from '../ItemBlock/CartItemBlock'
import { useSelector, useDispatch } from 'react-redux';

function CartPage() {
  const dispatch = useDispatch()
  const {items, itemsCost} = useSelector((state) => state.cart)

  

  return <div className='card_container'>
    <p className='card__title'>Корзина</p>
    <div className='items_container'>
      {items.map(item => <CartItemBlock  {...item}/>)}
    </div>
    <div className='pay-container'>
      <div className='pay-container__info'>
        <p>Общая стоимость:</p>
        <p>{itemsCost} ₽</p>
      </div>
      <button className='pay-container__button'>Оплатить</button>
    </div>
  </div>;
}

export default CartPage;
