import React from 'react';

const Search = ({onChangeSearch}) => {
  return <input type="text"
                placeholder="search"
                className="col"
                onChange={(e) => onChangeSearch(e.target.value)}/>
};

export default Search;
