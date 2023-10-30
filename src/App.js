// In the root component (e.g., App.js or SearchResults.js)
import React from 'react';
import Track from './JS Components/Track.js'; // Import the Track component
import TrackList from './JS Components/Tracklist.js';
import SearchBar from './JS Components/SearchBar.js';
import searchResults from './JS Components/SearchResults.js';
import Playlist from './JS Components/Playlist.js';
import styles from './app.module.css';

function App() {
  
   
    

    return (
      <div className={styles.container}>
        <h1>This is my Spotify Jammming Project!</h1>
        {/* Render other components */}
        {/* Pass searchResults to the Track component */}
        <SearchBar />
        <Track tracks={searchResults} />
        <Playlist playlists={searchResults}/>
        
      </div>
    );
  };
export default App;
