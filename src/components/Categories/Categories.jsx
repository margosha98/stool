import React from 'react';

function Categories({ onChangeCategory, value }) {
  const categories = ['Все', 'Стулья', 'Кресла', 'Диваны', 'Столы'];

  return (
    <div className="categories">
      <ul>
        {categories.map((item, i) => (
          <li onClick={() => onChangeCategory(i)} className={i === value ? 'active' : ''} key={i}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
