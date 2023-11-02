import React, { useState } from 'react';
import './App.scss';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import Playlist from './components/Playlist';

const data = [
  {
    id: 1,
    artist: 'Gregory Alan Isakov',
    title: 'Amsterdam',
    album: 'The Weatherman'
  },
  {
    id: 2,
    artist: 'Coldplay',
    title: 'Everglow',
    album: 'A Head Full of Dreams'
  },
  {
    id: 3,
    artist: 'New West',
    title: 'Those Eyes',
    album: 'Based On A True Story'
  },
  {
    id: 4,
    artist: 'Gregory Alan Isakov',
    title: 'The Fall',
    album: 'Appaloosa Bones'
  },
];

function App() {
  const [songs, setSongs] = useState(data);

  const [playlist, setPlaylist] = useState([]);

  const updatePlaylist = (song) => {
    if (!playlist.includes(song)) {
      setPlaylist([...playlist, song]);
      return;
    }
    const filteredPlaylist = playlist.filter(e => e !== song);
    setPlaylist(filteredPlaylist);
  };

  const isInPlaylist = (song) => {
    return playlist.includes(song);
  };

  return (
    <div className="App">
      <header className="App-header">
        <SearchBar />
      </header>
      <main>
        <SearchResults songs={songs} updatePlaylist={updatePlaylist} isInPlaylist={isInPlaylist} />
        <Playlist songs={playlist} updatePlaylist={updatePlaylist} isInPlaylist={isInPlaylist} />
      </main>
    </div>
  );
}

export default App;
