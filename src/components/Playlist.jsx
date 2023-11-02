import React, { useState } from 'react';
import '../styles/Playlist.scss'
import Tracklist from './Tracklist';
import Button from './Button';

const Playlist = ({ songs, updatePlaylist, isInPlaylist, updatePlaylistTitle, playlistTitle }) => {
  return (
    <div className="article-container">
      <div className='playlist-form'>
        <input placeholder='Add Playlist Name' className='playlist-input' value={playlistTitle} onChange={updatePlaylistTitle} ></input>
        <hr></hr>
      </div>
      <Tracklist songs={songs} updatePlaylist={updatePlaylist} isInPlaylist={isInPlaylist} />
      <Button>Submit to Spotify</Button>
    </div>
  );
};

export default Playlist;