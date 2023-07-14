import React from 'react';
import Categories from '../Categories/Categories';
import Sort from '../Sort/Sort';
import ItemBlock from '../ItemBlock/ItemBlock';
import Paginate from '../Paginate/Paginate';
import { SearchContext } from '../../App';
import { useSelector, useDispatch } from 'react-redux';

function Main() {
  const { searchValue } = React.useContext(SearchContext);
  const [elements, setElements] = React.useState([]);

  const { category, sort } = useSelector((state) => state.filter);

  let filterByCategory = category ? `category=${category}` : '';
  let sortByType = `sortBy=${sort.type}&order=asc`;
  let search = searchValue ? `&search=${searchValue}` : ``;

  const itemsPerPage = 6;
  const [itemOffset, setItemOffset] = React.useState(0);
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = elements.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(elements.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % elements.length;
    setItemOffset(newOffset);
  };

  React.useEffect(() => {
    fetch(
      `https://641af45b9b82ded29d462047.mockapi.io/items?${filterByCategory}&${sortByType}${search}`,
    )
      .then((response) => response.json())
      .then((items) => setElements(items));
  }, [filterByCategory, sortByType, search]);

  return (
    <div className="container">
      <div className="content__top">
        <Categories />
        <Sort />
      </div>

      <div className="content__items">
        {currentItems.map((el, i) => (
          <ItemBlock {...el} key={i} />
        ))}
      </div>
      <Paginate handlePageClick={(event) => handlePageClick(event)} pageCount={pageCount} />
    </div>
  );
}

export default Main;
