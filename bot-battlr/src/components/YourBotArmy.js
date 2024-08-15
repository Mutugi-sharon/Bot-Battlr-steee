import React from "react";
import BotCard from "./BotCard";

const YourBotArmy = ({ army, removeBotFromArmy }) => {
  return (
    <div>
      <h2>Your Bot Army</h2>
      <div className="bot-army">
        {army.map((bot) => (
          <BotCard
            key={bot.id}
            bot={bot}
            handleClick={() => removeBotFromArmy(bot)}
          />
        ))}
      </div>
    </div>
  );
};

export default YourBotArmy;
