import React, {useState} from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

function App() {
  
  const [searchText, setSearchText] = useState("");
  console.log(searchText);
  
  const API_KEY = "";//user must add own Riot Games API Key for security reasons

  const [playerData, setPlayerData] = useState({});

  function summonerSearch(event){
    //setting up API call
    var APICallString = "https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/"+searchText+"?api_key="+ API_KEY;
    
    //handling API call
    axios.get(APICallString).then(function(response){
      //success
      console.log(response.data);
      setPlayerData(response.data);
    }).catch(function(error){
      //error handling
      console.log(error);
    })
  }
  
  console.log(playerData);

  return (
    <div className="App">
      <div className='container'>
        <h5>League of Legends Summoner Search</h5>
        <input type="text" onChange={ e => setSearchText(e.target.value)}></input>
        <button onClick = {e => summonerSearch(e)} >Search</button>
      </div>

      {JSON.stringify(playerData) != '{}' ? 
      <>
        <p>{playerData.name}</p>
        <p>Summoner Level: {playerData.summonerLevel}</p>
        <img width="100" height="100" src={"http://ddragon.leagueoflegends.com/cdn/12.1.1/img/profileicon/" + playerData.profileIconId +".png"}></img>
      </> 
      : <><p>Summoner data is not available</p></>
      }

    </div>
  );
}

export default App;
