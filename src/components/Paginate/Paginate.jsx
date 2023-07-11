import React from 'react';
import ReactPaginate from 'react-paginate';
import style from './style.module.scss';

function Paginate({ handlePageClick, pageCount }) {
  return (
    <div className={style.root}>
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
      />
    </div>
  );
}

export default Paginate;
