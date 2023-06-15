import React from 'react';
import sort from '../../assets/sort.png';

function Sort() {
  const titlesOfSort = ['популярности', 'цене', 'алфавиту'];
  const [selected, setSelected] = React.useState(0);
  const [isVisiblePopup, setIsVisiblePopup] = React.useState(false);
  let nameOfSort = titlesOfSort[selected];

  const onClickToSelectSort = (i) => {
    setSelected(i);
    setIsVisiblePopup(false);
  };

  return (
    <div className="sort">
      <div className="sort__label">
        {/* <img className="sort__img" src={sort} alt="ss" /> */}
        <b>Сортировка по:</b>
        <span onClick={() => setIsVisiblePopup(!isVisiblePopup)}>{nameOfSort}</span>
      </div>
      {isVisiblePopup && (
        <div className="sort__popup">
          <ul>
            {titlesOfSort.map((el, i) => (
              <li
                key={i}
                onClick={() => onClickToSelectSort(i)}
                className={nameOfSort === el ? 'active' : ''}>
                {el}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Sort;
