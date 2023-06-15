import React from 'react';

function Categories() {
  const [categoryIndex, setCategoryIndex] = React.useState(0);

  const categories = ['Все', 'Стулья', 'Кресла', 'Диваны', 'Пуфы'];

  return (
    <div className="categories">
      <ul>
        {categories.map((item, i) => (
          <li
            onClick={() => setCategoryIndex(i)}
            className={i === categoryIndex ? 'active' : ''}
            key={i}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
