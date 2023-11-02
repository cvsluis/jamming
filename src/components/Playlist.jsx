import React, { useState } from 'react';
import '../styles/Playlist.scss'

const Playlist = () => {
  const [playlistTitle, setPlaylistTitle] = useState('');

  return (
    <div className="article-container">
      <div className='playlist-form'>
        <input placeholder='Playlist Name' className='playlist-input' value={playlistTitle} onChange={(e) => setPlaylistTitle(e.target.value)}></input>
        <hr></hr>
      </div>

    </div>
  );
};

export default Playlist;