import React from 'react';


function CartItemBlock({ title, imgUrl, price, types }) {
  const [count, setCount] = React.useState(0);

  const [activeTypeIndex, setActiveTypeIndex] = React.useState(0);
  return (
    <arcticle className="card">
      <img className="card__img" src={imgUrl} alt="chear" />
      <h2 className="card__title">{title}</h2>
      <div className="card__buy-container">
        <span className="card__text  card__text_buy">{price} ₽</span>
        <button onClick={() => setCount(count + 1)} className="card__button">

        </button>
      </div>
    </arcticle>
  );
}

export default CartItemBlock;
