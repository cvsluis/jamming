import React, { useState } from 'react';
import '../styles/Playlist.scss'
import Tracklist from './Tracklist';
import Button from './Button';

const Playlist = ({ songs, updatePlaylist, isInPlaylist }) => {
  const [playlistTitle, setPlaylistTitle] = useState('');

  return (
    <div className="article-container">
      <div className='playlist-form'>
        <input placeholder='Playlist Name' className='playlist-input' value={playlistTitle} onChange={(e) => setPlaylistTitle(e.target.value)}></input>
        <hr></hr>
      </div>
      <Tracklist songs={songs} updatePlaylist={updatePlaylist} isInPlaylist={isInPlaylist} />
      <Button>Submit to Spotify</Button>
    </div>
  );
};

export default Playlist;