import React from 'react';
import { setSortType } from '../../redux/filterSlice';
import { useSelector, useDispatch } from 'react-redux';

function Sort() {
  const dispatch = useDispatch();
  const { sort } = useSelector((state) => state.filter);

  const titlesOfSort = [
    { name: 'популярности', type: 'rating' },
    { name: 'цене', type: 'price' },
    { name: 'алфавиту', type: 'title' },
  ];

  const [isVisiblePopup, setIsVisiblePopup] = React.useState(false);
  const onClickToSelectSort = (i) => {
    setIsVisiblePopup(false);
    dispatch(setSortType(titlesOfSort[i]));
  };

  return (
    <div className="sort">
      <div className="sort__label">
        <b>Сортировка по:</b>
        <span onClick={() => setIsVisiblePopup(!isVisiblePopup)}>{sort.name}</span>
      </div>
      {isVisiblePopup && (
        <div className="sort__popup">
          <ul>
            {titlesOfSort.map((el, i) => (
              <li
                key={i}
                onClick={() => onClickToSelectSort(i)}
                className={sort.type === el.type ? 'active' : ''}>
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
