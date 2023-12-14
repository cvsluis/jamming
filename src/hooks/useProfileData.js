import { useEffect, useState } from "react";

export default function useProfileData() {
  const [accessToken, setAccessToken] = useState('');

  const [userId, setUserId] = useState('');

  const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);

  const getUserId = () => {
    fetch('https://api.spotify.com/v1/me', {
      headers: {
        'Authorization': "Bearer " + accessToken
      }
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => setUserId(data.id))
      .catch(error => console.error('Error fetching data:', error));
  };

  useEffect(() =>{
    if (accessTokenMatch) {
      setAccessToken(accessTokenMatch[1]);
    }
  }, []);

  useEffect(() => {
    if (accessToken) {
      getUserId();
    }
  }, [accessToken]);

  return { accessToken, userId };
}