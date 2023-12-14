import { useEffect, useState } from "react";

export default function useProfileData() {
  const [accessToken, setAccessToken] = useState('');

  const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);

  useEffect(() =>{
    if (accessTokenMatch) {
      setAccessToken(accessTokenMatch[1]);
    }
  }, []);

  return { accessToken };
}