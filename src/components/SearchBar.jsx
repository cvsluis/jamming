import React from 'react';
import '../styles/SearchBar.scss'
import Button from './Button';

const SearchBar = ({ searchString, updateSearchString, onSubmitSearch }) => {
  return (
    <form className='search-bar' onSubmit={onSubmitSearch}>
      <input value={searchString} onChange={updateSearchString} type="text" name="search-bar" id="search-bar" placeholder='Search for a song' className='search-input'></input>
      <Button onButtonPress={onSubmitSearch}>SEARCH</Button>
    </form>
  );
};

export default SearchBar;