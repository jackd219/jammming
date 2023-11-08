import styles from './SearchBar.module.css';
import Search from './Spotify';
import { useState } from "react";

/*function handleSubmit(){
  // Look to add the code in here to load up the track array and pass to the Playlist component
  // Will later tie into the Spotify API.
}*/

function SearchBar() {
  const [searchInput, setSearchInput] = useState("");

  const handleInputChange = (event) => {
    setSearchInput(event.target.value);
  };

 
  return (
    <div className = {styles.container}>
      <input
        type="text"
        placeholder="Search for a track..."
        value={searchInput}
        onChange={handleInputChange}
      />
      <button onClick={Search}>Search</button>
    </div>
  );
}

export default SearchBar;