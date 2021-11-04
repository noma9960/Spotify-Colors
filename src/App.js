import React from 'react'
import { SpotifyApiContext } from 'react-spotify-api'
import Cookies from 'js-cookie'
import Colors from "./Colors.js"
import { SpotifyAuth, Scopes } from 'react-spotify-auth'
import 'react-spotify-auth/dist/index.css'
import "./App.css"

const App = () => {
  const token = Cookies.get('spotifyAuthToken')
  return (
    <div className='App'>
      {token ? (
        <SpotifyApiContext.Provider value={token}>
         <Colors></Colors>
        </SpotifyApiContext.Provider>
      ) : (
        <SpotifyAuth
          redirectUri='http://localhost:3000/callback'
          clientID='ce10034c10894e4a9c47df1642fbc97c'
          scopes={[Scopes.userReadPrivate, 'user-read-email']} 
        />
      )}
    </div>
  )
}
export default App