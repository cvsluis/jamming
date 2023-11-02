import React from 'react';
import Track from './Track';
import '../styles/SearchResults.scss'

const SearchResults = ({songs}) => {

  const songList = songs.map(song => {
    return (
      <Track key={song.id} song={song}/>
    )
  })

  return (
    <div className="article-container">
      <h2>Results</h2>
      {songList}
    </div>
  );
};

export default SearchResults;