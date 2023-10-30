import React from 'react';
import styles from './SearchBar.module.css';

function handleSubmit(){
  // Look to add the code in here to load up the track array and pass to the Playlist component
  // Will later tie into the Spotify API.
}

function SearchBar() {

    
    return (
      <div className={styles.container}>
        <input placeholder='Search songs here!'>

        </input>
            <button className={styles.button}>Search</button>
      </div>
    )
  }

  export default SearchBar;