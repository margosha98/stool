import React from 'react';
function ItemBlock({ title, imgUrl, price, types }) {
  const [count, setCount] = React.useState(0);

  const [activeTypeIndex, setActiveTypeIndex] = React.useState(0);
  return (
    <arcticle className="card">
      <img className="card__img" src={imgUrl} alt="chear" />
      <h2 className="card__title">{title}</h2>
      <ul className="card__types-container">
        {types.map((type, i) => (
          <li
            key={i}
            onClick={() => setActiveTypeIndex(i)}
            className={activeTypeIndex === i ? 'card__text  card__text_active' : 'card__text'}>
            <div className="wood" style={{ backgroundColor: type.color }}></div>
            {type.title}
          </li>
        ))}
      </ul>
      <div className="card__buy-container">
        <span className="card__text  card__text_buy">{price} ₽</span>
        <button onClick={() => setCount(count + 1)} className="card__button">
          <span>В корзину</span>
          {!!count && <span className="number">{count}</span>}
        </button>
      </div>
    </arcticle>
  );
}

export default ItemBlock;
