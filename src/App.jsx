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
  {
    id: 5,
    artist: 'Alex Turner',
    title: 'Stuck on the puzzle',
    album: 'Submarine'
  },
  {
    id: 6,
    artist: 'John Vincent III',
    title: 'Highway Woman',
    album: 'Highway Woman'
  },
  {
    id: 7,
    artist: 'John Vincent III',
    title: 'Untitled #2',
    album: 'Songs from the Valley'
  },
  {
    id: 8,
    artist: 'Arctic Monkeys',
    title: "There'd Better Be A Mirrorball",
    album: "The Car"
  }
];

function App() {
  const [songs, setSongs] = useState(data);

  // Playlist Songs State
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

  // Playlist Title State
  const [playlistTitle, setPlaylistTitle] = useState('');
  const updatePlaylistTitle = (e) => {
    setPlaylistTitle(e.target.value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <SearchBar />
      </header>
      <main>
        <SearchResults songs={songs} updatePlaylist={updatePlaylist} isInPlaylist={isInPlaylist} />
        <Playlist songs={playlist} updatePlaylist={updatePlaylist} isInPlaylist={isInPlaylist} updatePlaylistTitle={updatePlaylistTitle} playlistTitle={playlistTitle}/>
      </main>
    </div>
  );
}

export default App;
