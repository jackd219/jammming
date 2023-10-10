// In the root component (e.g., App.js or SearchResults.js)
import React from 'react';
import Track from './JS Components/Track.js'; // Import the Track component
import TrackList from './JS Components/Tracklist.js';
import SearchBar from './JS Components/SearchBar.js';

class RootComponent extends React.Component {
  render() {
    // Assume you have a searchResults array with track data
    const searchResults = [
      {
        songName: "Don't stop me now",
        artist: "Queen",
        album: "Bohemian Rhapsody",
        id: {}
     },
     {
        songName: "Dakota",
        artist: "Stereophonics",
        album: "Language Sex Violence Other",
        id: {}
     },
     {
        songName: "Hello",
        artist: "Adele",
        album: "25",
        id: {}
     },
    ];

    return (
      <div>
        {/* Render other components */}
        {/* Pass searchResults to the Track component */}
        <TrackList />
        <SearchBar />
        <Track tracks={searchResults} />
      </div>
    );
  }
};
export default RootComponent;
