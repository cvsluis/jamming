import { useState } from "react";

export default function useSearchData() {
  const [songs, setSongs] = useState([]);

  // Search String State
  const [searchString, setSearchString] = useState("");
  const updateSearchString = (e) => {
    setSearchString(e.target.value);
  };

  const onSubmitSearch = (e) => {
    e.preventDefault();
    const url = 'https://api.spotify.com/v1/search?q=' + searchString + '&type=track&limit=20';

    fetch(url, {
      method: "GET",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + process.env.REACT_APP_TOKEN
      }})
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => setSongs(data.tracks.items))
      .catch(error => console.error('Error fetching data:', error));

    setSearchString("");
  };

  return { songs, searchString, updateSearchString, onSubmitSearch };
}