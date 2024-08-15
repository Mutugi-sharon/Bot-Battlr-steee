import React, { useState } from "react";
import BotCollection from "./components/BotCollection";
import YourBotArmy from "./components/YourBotArmy";
import "./styles.css";

const App = () => {
  const [army, setArmy] = useState([]);
  const [enlistedBots, setEnlistedBots] = useState({});

  const addBotToArmy = (bot) => {
    if (!enlistedBots[bot.bot_class]) {
      setArmy([...army, bot]);
      setEnlistedBots((prev) => ({ ...prev, [bot.bot_class]: true }));
    }
  };

  const removeBotFromArmy = (bot) => {
    setArmy(army.filter((b) => b.id !== bot.id));
    setEnlistedBots((prev) => ({ ...prev, [bot.bot_class]: false }));
  };

  return (
    <div>
      <h1>Bot Battlr</h1>
      <YourBotArmy army={army} removeBotFromArmy={removeBotFromArmy} />
      <BotCollection addBotToArmy={addBotToArmy} army={army} />
    </div>
  );
};

export default App;
