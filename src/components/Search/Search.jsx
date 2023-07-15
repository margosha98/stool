import React from 'react';
import search from '../../assets/search.svg';
import cancel from '../../assets/cancel.svg';
import { SearchContext } from '../../App';

function Search() {
  const { searchValue, setSearchValue } = React.useContext(SearchContext);

  const [toogleInput, setToogleInput] = React.useState(0);
  return (
    <div className="input__container">
      {toogleInput ? (
        <input
          value={searchValue}
          className="input"
          placeholder="Поиск..."
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
        />
      ) : (
        <button onClick={() => setToogleInput(true)}>
          <svg
            width="43"
            height="47"
            viewBox="0 0 43 47"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <circle cx="20" cy="20" r="18.5" stroke="black" stroke-width="3" />
            <path d="M31.1954 34.3188L40 46" stroke="black" stroke-width="3" />
          </svg>
          <span>Поиск...</span>
        </button>
      )}

      {searchValue && (
        <img
          className="cancel"
          src={cancel}
          alt="cancel"
          onClick={() => {
            setSearchValue('');
            setToogleInput(false);
          }}
        />
      )}
    </div>
  );
}

export default Search;
