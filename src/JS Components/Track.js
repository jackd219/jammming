import React from 'react';
import styles from './Track.module.css';



const Track = ({ tracks, addTrackToPlaylist }) => {
  return (
    <div className={styles.container}>
      <h2>Track Results</h2>
      <ul>
      {tracks.map((track, index) => (
          <li key={index}>
          <p>Song Name: {track.name}</p>
          <p>Artist: {track.artists[0].name}</p>
          <p>Album: {track.album.name}</p>
          <button onClick={() => {
            addTrackToPlaylist(track);
          }}>Add</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Track;


