import React from "react";
import BotCard from "./BotCard";

function BotCollection({botCollection, userBots, setUserBots}) {
  
  const displayBotCards = botCollection.map(bot => {
    return <BotCard key={bot.id} bot={bot} userBots={userBots} setUserBots={setUserBots}/>
  })
  
  
  return (
    <div className="ui four column grid">
      <div className="row">
       
        {displayBotCards}
      </div>
    </div>
  );
}

export default BotCollection;
