import React, { useState, useEffect } from "react";
import axios from "axios";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";


const client = axios.create(
  {
    baseURL : "http://localhost:8002/bots"
  }
)

function BotsPage() {
 
  const [bots, setBots] = useState([]);
  
  const [userBots, setUserBots] = useState([]);

  
  useEffect(
    ()=>{
      client
        .get("/")
        .then((response)=>setBots(response.data));
    }, []
  )

  return (
    <div>
      
      <YourBotArmy mybots={userBots} userBots={userBots} setUserBots={setUserBots}/>
      <BotCollection botCollection={bots} userBots={userBots} setUserBots={setUserBots} />
    </div>
  )
}

export default BotsPage;
