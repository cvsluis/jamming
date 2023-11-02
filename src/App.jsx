import React, { useState } from 'react';
import './App.scss';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';

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

  return (
    <div className="App">
      <header className="App-header">
        <SearchBar />
      </header>
      <main>
        <SearchResults songs={songs}/>
      </main>
    </div>
  );
}

export default App;
