import React from 'react';
import '../styles/Track.scss' 

const Track = ({ song, updatePlaylist, isInPlaylist }) => {
  return (
    <div className='track-container'>
      <div className='track-contents'>
        <div className='title-container'>
          <h4>{song.title}</h4>
          <h5>{song.artist} - {song.album}</h5>
        </div>
        <button className='track-button' onClick={() => updatePlaylist(song)}>{isInPlaylist(song) ? '-' : '+'}</button>
      </div>
      <hr></hr>
    </div>
  );
};

export default Track;