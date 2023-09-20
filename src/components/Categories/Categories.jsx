import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCategory } from '../../redux/filterSlice';

function Categories() {
  const categories = ['Все', 'Стулья', 'Кресла', 'Диваны', 'Столы'];
  const dispatch = useDispatch();
  const category = useSelector((state) => state.filter.category);

  return (
    <div className="categories">
      <ul>
        {categories.map((item, i) => (
          <li
            onClick={() => dispatch(setCategory(i))}
            className={i === category ? 'active' : ''}
            key={i}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
