import React from 'react';
import { setSortType } from '../../redux/filterSlice';
import { useSelector, useDispatch } from 'react-redux';
import { useRef } from 'react';

function Sort() {
  const dispatch = useDispatch();
  const { sort } = useSelector((state) => state.filter);
  const sortElementRef = useRef(null)

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

  React.useEffect(() => {
    const onClickOutsideSort = (event) => {
      if (!event.composedPath().includes(sortElementRef.current)) {
        setIsVisiblePopup(false)
      }
    }    

    document.body.addEventListener('click', onClickOutsideSort)

    return () => {
      document.body.removeEventListener('click', onClickOutsideSort)
    };
  }, [])

  return (
    <div className="sort" ref={sortElementRef}>
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
