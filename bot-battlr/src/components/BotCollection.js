import React, { useState, useEffect } from "react";
import BotCard from "./BotCard";
import SortBar from "./SortBar";
import FilterBar from "./FilterBar";

const BotCollection = ({ addBotToArmy, army }) => {
  const [bots, setBots] = useState([]);
  const [error, setError] = useState(null);
  const [sortedBots, setSortedBots] = useState([]);
  const [filteredBots, setFilteredBots] = useState([]);
  const [selectedClasses, setSelectedClasses] = useState({});

  useEffect(() => {
    fetch("https://bot-battr-json-server.vercel.app/bots")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => setBots(data))
      .catch((error) => setError(error.message));
  }, []);

  const handleSort = (sortOption) => {
    const sortedBots = [...bots].sort((a, b) => {
      if (sortOption === "health") {
        return b.health - a.health;
      } else if (sortOption === "damage") {
        return b.damage - a.damage;
      } else if (sortOption === "armor") {
        return b.armor - a.armor;
      }
    });
    setSortedBots(sortedBots);
  };

  const handleFilter = (selectedClasses) => {
    const filteredBots = bots.filter((bot) => {
      return Object.keys(selectedClasses).some(
        (cls) => bot.bot_class === cls && selectedClasses[cls]
      );
    });
    setFilteredBots(filteredBots);
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>Bot Collection</h2>
      <SortBar onSort={handleSort} />
      <FilterBar onFilter={handleFilter} />
      <div className="bot-collection">
        {(filteredBots.length > 0 ? filteredBots : sortedBots).map((bot) => (
          <BotCard
            key={bot.id}
            bot={bot}
            handleClick={() => addBotToArmy(bot)}
          />
        ))}
      </div>
    </div>
  );
};

export default BotCollection;
