import React from 'react';
import search from '../../assets/search.png';

function Search() {
  return (
    <div className="input__container">
      <input className="input" placeholder="Поиск..." />
      <img src={search} alt="search img" />
    </div>
  );
}

export default Search;
