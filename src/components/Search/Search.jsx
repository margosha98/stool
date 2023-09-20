import React from 'react';
import search from '../../assets/search.svg';
import cancel from '../../assets/cancel.svg';
import { SearchContext } from '../../App';
import { useRef } from 'react';
import debounce from 'lodash.debounce';

function Search() {
  const [localSearchValue, setLocalSearchValue] = React.useState('')
  const {setSearchValue } = React.useContext(SearchContext);
  const [toogleInput, setToogleInput] = React.useState(0);

  const inputRef = useRef(null);

  const activeSearchInput = (value) => {
    setToogleInput(value)
    setTimeout(() => {
      inputRef.current.focus();
  }, 150)
}

let updateInput = React.useCallback(
    debounce((str) => {
      setSearchValue(str)
    }, 500), []
  )

  const onChangeInput = (event) => {
    setLocalSearchValue(event.target.value);
    updateInput(event.target.value)
  }

  return (
    <div className="input__container">
      {toogleInput ? (
        <input
          value={localSearchValue}
          ref={inputRef}
          className="input"
          placeholder="Поиск..."
          onChange = {onChangeInput}
        />
      ) : (
        <button onClick={() => activeSearchInput(true)}>
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

      {localSearchValue && (
        <img
          className="cancel"
          src={cancel}
          alt="cancel"
          onClick={() => {
            setSearchValue('');
            setLocalSearchValue('')
            setToogleInput(false);
          }}
        />
      )}
    </div>
  );
}

export default Search;
