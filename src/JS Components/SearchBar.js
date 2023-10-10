import React from 'react';
import styles from './SearchBar.module.css';

function SearchBar() {

    
    return (
      <div className={styles.container}>
        <input placeholder='Enter Song Information Here'
                >

        </input>
            <button>Search</button>
      </div>
    )
  }

  export default SearchBar;