import React from 'react';
import '../styles/SearchBar.scss'

const SearchBar = () => {
  return (
    <form>
      <input type="text" name="search-bar" id="search-bar" placeholder='Search for a song'></input>
    </form>
  );
};

export default SearchBar;