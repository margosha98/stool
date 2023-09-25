import React from 'react';
import CartItemBlock from '../ItemBlock/CartItemBlock'
import { useSelector, useDispatch } from 'react-redux';

function CartPage() {
  const dispatch = useDispatch()
  const items = useSelector((state) => state.cart.items)

  

  return <div>
    {items.map(item => <CartItemBlock  {...item}/>)}
  </div>;
}

export default CartPage;
