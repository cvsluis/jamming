import React from 'react';
import Track from './Track';

const Tracklist = ({ songs, updatePlaylist, isInPlaylist }) => {

  const songList = songs.map(song => {
    return (
      <Track key={song.id} song={song} updatePlaylist={updatePlaylist} isInPlaylist={isInPlaylist} />
    );
  });

  return (
    <>
      {songList}
    </>
  );
};

export default Tracklist;