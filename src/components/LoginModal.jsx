import React from "react";
import '../styles/LoginModal.scss';

const LoginModal = () => {
  const clientId = process.env.REACT_APP_CLIENT_ID;
  const redirectUri = 'http://localhost:3000/';

  return (
    <div className="login-modal">
      <h1>Login to Spotify</h1>
      <a href={`https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`}>Go to Spotify</a>
    </div>
  )
}

export default LoginModal;