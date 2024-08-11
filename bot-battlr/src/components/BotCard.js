import React from 'react';

const BotCard = ({ bot, handleClick, handleDischarge }) => {
  return (
    <div className="bot-card" onClick={handleClick}>
      <img src={bot.avatar_url} alt={bot.name} className="bot-avatar" />
      <h3>{bot.name}</h3>
      <p>{bot.description}</p>
      <button onClick={(e) => { e.stopPropagation(); handleDischarge(); }}>Discharge</button>
    </div>
  );
};

export default BotCard;
