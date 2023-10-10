import React from 'react';
import styles from './Track.module.css';

class Track extends React.Component {
  render() {
    // Receive the tracks prop
    const { tracks } = this.props;

    return (
      <div className={styles.container}>
        <h2>Tracks</h2>
        <ul>
          {tracks.map((track, index) => (
            <li key={index}>
              <p>Song Name: {track.name}</p>
              <p>Artist: {track.artist}</p>
              <p>Album: {track.album}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Track;