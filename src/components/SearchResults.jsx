import React from 'react';
import Tracklist from './Tracklist';
import '../styles/SearchResults.scss'

const SearchResults = ({songs}) => {

  return (
    <div className="article-container">
      <h2>Results</h2>
      <Tracklist songs={songs}/>
    </div>
  );
};

export default SearchResults;