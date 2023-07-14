import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCategory } from '../../redux/filterSlice';

function Categories({ onChangeCategory, value }) {
  const categories = ['Все', 'Стулья', 'Кресла', 'Диваны', 'Столы'];
  const dispatch = useDispatch();

  return (
    <div className="categories">
      <ul>
        {categories.map((item, i) => (
          <li
            onClick={() => dispatch(setCategory(i))}
            className={i === value ? 'active' : ''}
            key={i}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
