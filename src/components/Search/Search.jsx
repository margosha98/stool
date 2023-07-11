import React from 'react';
import search from '../../assets/search.png';
import cancel from '../../assets/cancel.svg';
import { SearchContext } from '../../App';

function Search() {
  const { searchValue, setSearchValue } = React.useContext(SearchContext);
  return (
    <div className="input__container">
      <input
        value={searchValue}
        className="input"
        placeholder="Поиск..."
        onChange={(e) => {
          setSearchValue(e.target.value);
        }}
      />
      <img src={search} alt="search img" />
      {searchValue && (
        <img className="cancel" src={cancel} alt="cancel" onClick={() => setSearchValue('')} />
      )}
    </div>
  );
}

export default Search;
