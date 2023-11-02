import React from 'react';
import Tracklist from './Tracklist';
import '../styles/SearchResults.scss'

const SearchResults = ({ songs, updatePlaylist, isInPlaylist }) => {

  return (
    <div className="article-container">
      <h2>Results</h2>
      <Tracklist songs={songs} updatePlaylist={updatePlaylist} isInPlaylist={isInPlaylist} />
    </div>
  );
};

export default SearchResults;