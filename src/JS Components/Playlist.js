import { useState } from 'react';
import styles from './Playlist.module.css';
import SearchResults from './SearchResults';


const Playlist = ({ playlists }) => {

    const [playlist, setPlaylist] = useState([]);
    const [playlistName, setPlaylistName] = useState('');

    return (
      <div className={styles.container}>
        <h2>Name your playlist below</h2>
            <input type="text"
            value={playlistName}
            onChange={(e) => setPlaylistName(e.target.value)}
            placeholder="Enter playlist name"></input>
        <ul>
          {playlists.map((playlist, index) => (
            <li key={index}>
              <p>Song Name: {playlist.songName}</p>
              <p>Artist: {playlist.artist}</p>
              <p>Album: {playlist.album}</p>
              <button>Remove Track</button>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default Playlist;
  