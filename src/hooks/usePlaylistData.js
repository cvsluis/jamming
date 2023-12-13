import { useState } from "react";

export default function usePlaylistData() {
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

  return { updatePlaylist, isInPlaylist, playlist, updatePlaylistTitle, playlistTitle };
}