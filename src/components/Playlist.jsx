import React from 'react';
import '../styles/Playlist.scss'
import Tracklist from './Tracklist';
import Button from './Button';

const Playlist = ({ songs, updatePlaylist, isInPlaylist, updatePlaylistTitle, playlistTitle, onSubmitPlaylist, playlistTitleError }) => {
  return (
    <div className="article-container">
      <div className='playlist-form'>
        <input placeholder='Add Playlist Name' className='playlist-input' value={playlistTitle} onChange={updatePlaylistTitle} ></input>
        <hr></hr>
      </div>
      <div className='playlist-error'>{playlistTitleError}</div>
      <Tracklist songs={songs} updatePlaylist={updatePlaylist} isInPlaylist={isInPlaylist} />
      <Button onButtonPress={onSubmitPlaylist}>Submit to Spotify</Button>
    </div>
  );
};

export default Playlist;