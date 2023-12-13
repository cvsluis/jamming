import { useState } from "react";

export default function useSearchData() {
  const data = [
    {
      id: 1,
      artist: "Gregory Alan Isakov",
      title: "Amsterdam",
      album: "The Weatherman",
    },
    {
      id: 2,
      artist: "Coldplay",
      title: "Everglow",
      album: "A Head Full of Dreams",
    },
    {
      id: 3,
      artist: "New West",
      title: "Those Eyes",
      album: "Based On A True Story",
    },
    {
      id: 4,
      artist: "Gregory Alan Isakov",
      title: "The Fall",
      album: "Appaloosa Bones",
    },
    {
      id: 5,
      artist: "Alex Turner",
      title: "Stuck on the puzzle",
      album: "Submarine",
    },
    {
      id: 6,
      artist: "John Vincent III",
      title: "Highway Woman",
      album: "Highway Woman",
    },
    {
      id: 7,
      artist: "John Vincent III",
      title: "Untitled #2",
      album: "Songs from the Valley",
    },
    {
      id: 8,
      artist: "Arctic Monkeys",
      title: "There'd Better Be A Mirrorball",
      album: "The Car",
    },
  ];

  const [songs, setSongs] = useState([]);

  // Search String State
  const [searchString, setSearchString] = useState("");
  const updateSearchString = (e) => {
    setSearchString(e.target.value);
  };

  const onSubmitSearch = (e) => {
    e.preventDefault();
    setSongs(data);
    setSearchString("");
  };

  return { songs, searchString, updateSearchString, onSubmitSearch };
}
