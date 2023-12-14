import { useState } from "react";
import useProfileData from './useProfileData';

export default function usePlaylistData() {
  const { accessToken, userId } = useProfileData();

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

  const createPlaylist = async () => {
    const response = await fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
      headers: {
        'Authorization': "Bearer " + accessToken
      },
      method: 'POST',
      body: JSON.stringify({ name: playlistTitle })
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return await response.json();
  };

  const onSubmitPlaylist = async (e) => {
    e.preventDefault();
    try {
      const newPlaylist = await createPlaylist();

      const playlistId = newPlaylist.id;
    } catch (error) {
      console.error('Sorry, we could not complete your request: ', error);
      throw error;
    }
  }

  return { updatePlaylist, isInPlaylist, playlist, updatePlaylistTitle, playlistTitle, onSubmitPlaylist };
}