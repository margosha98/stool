import React from 'react';

function Sort({ value, onChangeSortType }) {
  const titlesOfSort = [
    { name: 'популярности', type: 'rating' },
    { name: 'цене', type: 'price' },
    { name: 'алфавиту', type: 'title' },
  ];

  const [isVisiblePopup, setIsVisiblePopup] = React.useState(false);
  const onClickToSelectSort = (i) => {
    setIsVisiblePopup(false);
    onChangeSortType(titlesOfSort[i]);
  };

  return (
    <div className="sort">
      <div className="sort__label">
        <b>Сортировка по:</b>
        <span onClick={() => setIsVisiblePopup(!isVisiblePopup)}>{value.name}</span>
      </div>
      {isVisiblePopup && (
        <div className="sort__popup">
          <ul>
            {titlesOfSort.map((el, i) => (
              <li
                key={i}
                onClick={() => onClickToSelectSort(i)}
                className={value.type === el.type ? 'active' : ''}>
                {el.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Sort;
