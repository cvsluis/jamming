import React, { useState } from 'react';
import '../styles/Playlist.scss'

const Playlist = () => {
  const [playlistTitle, setPlaylistTitle] = useState('');
  
  return (
    <div className="article-container">
      <input placeholder='Playlist Name' className='playlist-input' value={playlistTitle} onChange={(e) => setPlaylistTitle(e.target.value)}></input>
    </div>
  );
};

export default Playlist;