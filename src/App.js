// In the root component (e.g., App.js or SearchResults.js)
import { useState} from 'react';
import Track from './JS Components/Track.js'; // Import the Track component

import Playlist from './JS Components/Playlist.js';
import styles from './app.module.css';
import Spotify from './JS Components/Spotify';


function App() {
  
   
  const [playlist, setPlaylist] = useState([]);
  const [playlistName, setPlaylistName] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchResults = (data) => {
    setSearchResults(data);
  };

  
  // Function to add a track to the playlist
  const addTrackToPlaylist = (track) => {
    console.log('Adding track:', track);
    if (!playlist.some((t) => t.songName === track.songName)) {
      setPlaylist([...playlist, track]);
    }
  };

  const removeTrackFromPlaylist = (index) => {
    setPlaylist(playlist.filter((_, i) => i !== index));
  };

  const handlePlaylistName = (e) => {
    setPlaylistName(e.target.value);
  }

  const saveSpotifyPlaylist = (e) => {
    setPlaylist(e.target.value);
  }

    return (
      <div className={styles.container}>
        <h1>This is my Spotify Jammming Project!</h1>
        <Spotify handleSearchResults={handleSearchResults}/>
        <Track tracks={searchResults} addTrackToPlaylist={addTrackToPlaylist}/>
        <Playlist playlist={playlist}
        playlistName={playlistName}
        setPlaylistName={handlePlaylistName}
        removeTrackFromPlaylist={removeTrackFromPlaylist}
        saveSpotifyPlaylist ={saveSpotifyPlaylist}/>
        
      </div>
    );
  };
export default App;
