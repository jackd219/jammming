// Using Implicit Grant Flow to obtain GET request
import { useState, useEffect } from "react";
import SearchBar from "./SearchBar";

const client_id = 'f13525cbf8c24b8fbc4470c5cdce2dc0';
const client_secret = '4ee9b399eb8c4c9bb21c06238d50dba1';
const redirect_uri = 'http://localhost:3000';
/*


const state = generateRandomString(16);

localStorage.setItem(stateKey, state);
const scope = 'user-read-private user-read-email';

function generateRandomString(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}; */

export default function Spotify() {

const [searchInput, setSearchInput] = useState("");
const [accessToken, setAccessToken] = useState("");
const [searchResults, setSearchResults] = useState([]);



useEffect(() => {

  //API Access Token

  const authParameters = {
      method: 'POST',
      headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: 'grant_type=client_credentials&client_id=' + client_id + '&client_secret=' + client_secret
  }
fetch('https://accounts.spotify.com/api/token', authParameters)
.then(result => result.json())
.then(data => setAccessToken(data.access_token));


}, []);

// get the user information

async function GetUserInfo() {
console.log("Access Token:" , accessToken);

const userParameters = {
  method: 'GET',
  headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + accessToken
  }
}
const response = await fetch("https://api.spotify.com/v1/me", {
  headers: {
    Authorization: `Bearer ${accessToken}` // Replace with your valid access token
  }
})
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Request failed with status: ${response.status}`);
    }
    return response.json();
  })
  .then(response => {
    console.log(response);
    // Now you can use userResponse for further processing or store it in state.
  })
  .catch(error => {
    console.error("Error fetching user data:", error);
  });

};

async function Search() {
    console.log("Search for " + searchInput); //Search Input

    //get - song ID
    const songParameters = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + accessToken
        }
    }


    const response = await fetch("https://api.spotify.com/v1/search?q=" + searchInput + "&type=track&limit=20", songParameters)
    .then((response) => response.json())
    .then(response => {console.log(response);
      // Here, you should pass 'data' to your parent component using props
     
      
    });



    // Extract track details and create an array of track objects
    const tracks = response.tracks.items.map((trackItem) => {
      return {
        id: trackItem.id,
        songName: trackItem.name,
        artist: trackItem.artists[0].name, // First artist's name
        album: trackItem.album.name,
        uri: trackItem.uri,
        
      };
    });

    setSearchResults(tracks);

    // Update search results with the new tracks
    
    /*setSearchResults(tracks);
    console.log(tracks);*/



  }


  async function SavePlaylist() {
    console.log("Saving " + searchInput); // Search Input
  
    // Step 1: Create a new playlist
    const createPlaylistResponse = await fetch('https://api.spotify.com/v1/me/playlists', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + accessToken,
      },
      body: JSON.stringify({
        name: 'Your Playlist Name', // Replace with the desired playlist name
  
      }),
    });
  
    if (!createPlaylistResponse.ok) {
      console.error('Error creating playlist:', createPlaylistResponse.statusText);
      return;
    }
  
    const playlistData = await createPlaylistResponse.json();
    const playlistId = playlistData.id;
  
    // Step 2: Add tracks to the playlist
    // For each track you want to add, you can use the track's URI (e.g., 'spotify:track:5T8EDUDqKcs6OSOwEsfqG7')
  
    // Example:
    const tracksToAdd = [
      'spotify:track:5T8EDUDqKcs6OSOwEsfqG7',
      'spotify:track:3qaSqrrevBrb84xl5JlptU',
      // Add more track URIs here
    ];
  
    const addTracksResponse = await fetch(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + accessToken,
      },
      body: JSON.stringify({
        uris: tracksToAdd,
      }),
    });
  
    if (!addTracksResponse.ok) {
      console.error('Error adding tracks to the playlist:', addTracksResponse.statusText);
      return;
    }
  
    // Step 3: Save the playlist
    const savePlaylistResponse = await fetch(`https://api.spotify.com/v1/playlists/${playlistId}/followers`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + accessToken,
      },
    });
  
    if (!savePlaylistResponse.ok) {
      console.error('Error saving the playlist:', savePlaylistResponse.statusText);
      return;
    }
  
    console.log('Playlist saved successfully!');
  };






  return (
    <div>
      {/* Other JSX for your Spotify component */}
      <input
        type="text"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        placeholder="Search for tracks"
      />
      <button onClick={Search}>Search</button>
      <button onClick={GetUserInfo}>Get User information</button>
      {/* Display the search results, map and render tracks */}
      
      
    </div>
  );
        };

        /*
        
        <ul>
        {searchResults.map((track, index) => (
          <li key={index}>
            <p>Song Name: {track.songName}</p>
            <p>Artist: {track.artist}</p>
            <p>Album: {track.album}</p>
            
          </li>
        ))}
      </ul>*/