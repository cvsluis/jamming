import React from 'react';
import Track from './Track';

const Tracklist = ({ songs }) => {

  const songList = songs.map(song => {

    return (
      <Track key={song.id} song={song} />
    );
  })

  return (
    <>
      {songList}
    </>

  );
};

export default Tracklist;