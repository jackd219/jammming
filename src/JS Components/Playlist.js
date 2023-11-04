import React from 'react';
import styles from './Playlist.module.css';

const Playlist = ({ playlist, removeTrackFromPlaylist, handlePlaylistName}) => {
  

  

  return (
    <div className={styles.container}>
      <h2>Name your playlist below</h2>
      <input
        type="text"
             onChange={handlePlaylistName}
        placeholder="Enter playlist name"
      />
      <div className={styles.trackList}>
 
        <ul>
          {playlist.map((track, index) => (
            <li key={index}>
              <p>Song Name: {track.songName}</p>
              <p>Artist: {track.artist}</p>
              <p>Album: {track.album}</p>
              <button onClick={() => {
              removeTrackFromPlaylist(index); // Check if this button click is handled
              console.log('Removing track:', track);
            }}>Remove Track</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Playlist;
  