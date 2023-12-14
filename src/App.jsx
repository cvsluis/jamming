import React from 'react';
import './App.scss';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import Playlist from './components/Playlist';
import useSearchData from './hooks/useSearchData';
import usePlaylistData from './hooks/usePlaylistData';
import LoginModal from './components/LoginModal';
import useProfileData from './hooks/useProfileData';

function App() {
  const { songs, searchString, updateSearchString, onSubmitSearch } = useSearchData();
  const { updatePlaylist, isInPlaylist, playlist, updatePlaylistTitle, playlistTitle, onSubmitPlaylist, playlistTitleError } = usePlaylistData();
  const { accessToken } = useProfileData();

  return (
    <div className="App">
      {!accessToken && <LoginModal />}
      <header className="App-header">
        <div className='logo'>
          <h1>Jamming!</h1>
          <p>Spotify Playlist Creator</p>
        </div>
        <SearchBar searchString={searchString} updateSearchString={updateSearchString} onSubmitSearch={onSubmitSearch} />
      </header>
      <main>
        <SearchResults songs={songs} updatePlaylist={updatePlaylist} isInPlaylist={isInPlaylist} />
        <Playlist songs={playlist} updatePlaylist={updatePlaylist} isInPlaylist={isInPlaylist} updatePlaylistTitle={updatePlaylistTitle} playlistTitle={playlistTitle} onSubmitPlaylist={onSubmitPlaylist} playlistTitleError={playlistTitleError} />
      </main>
    </div>
  );
}

export default App;
