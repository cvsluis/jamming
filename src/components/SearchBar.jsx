import React from 'react';
import '../styles/SearchBar.scss'
import Button from './Button';

const SearchBar = () => {
  return (
    <form>
      <input type="text" name="search-bar" id="search-bar" placeholder='Search for a song'></input>
      <Button />
    </form>
  );
};

export default SearchBar;