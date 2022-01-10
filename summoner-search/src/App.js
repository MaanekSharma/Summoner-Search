import React, {useState} from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

function App() {
  
  const [searchText, setSearchText] = useState("");
  console.log(searchText);
  
  const API_KEY = "RGAPI-df44218f-328f-466c-be90-95bc4631c3de";

  function summonerSearch(event){
    //setting up API call
    var APICallString = "http://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/"+searchText+"?API_KEY="+ API_KEY;
    
    //handling API call
    axios.get(APICallString).then(function(response){
      //success
      console.log(response);
    }).catch(function(error){
      //error handling
      console.log(error);
    })
  }
  
  return (
    <div className="App">
      <div className='container'>
        <h5>League of Legends Summoner Search</h5>
        <input type="text" onChange={ e => setSearchText(e.target.value)}></input>
        <button onClick = {e => summonerSearch(e)} >Search</button>
      </div>
    </div>
  );
}

export default App;
