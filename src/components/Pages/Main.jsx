import React from 'react';
import Categories from '../Categories/Categories';
import Sort from '../Sort/Sort';
import ItemBlock from '../ItemBlock/ItemBlock';
import elements from '../../elements.json';

function Main() {
  return (
    <div className="container">
      <div className="content__top">
        <Categories />
        <Sort />
      </div>

      <div className="content__items">
        {elements.map((el) => (
          <ItemBlock {...el} />
        ))}
      </div>
    </div>
  );
}

export default Main;
