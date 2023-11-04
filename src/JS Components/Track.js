import React from 'react';
import styles from './Track.module.css';



const Track = ({ tracks, addTrackToPlaylist }) => {
  return (
    <div className={styles.container}>
      <h2>Track Results</h2>
      <ul>
        {tracks.map((track, index) => (
          <li key={index}>
            <p>Song Name: {track.songName}</p>
            <p>Artist: {track.artist}</p>
            <p>Album: {track.album}</p>
            <button onClick={() => {
              addTrackToPlaylist(track); // Check if this button click is handled
              console.log('Adding track:', track);
            }}>Add</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Track;
