import React, { useState } from "react";

const SortBar = ({ onSort }) => {
  const [sortOption, setSortOption] = useState("health");

  const handleSort = (e) => {
    setSortOption(e.target.value);
    onSort(e.target.value);
  };

  return (
    <div>
      <label>Sort by:</label>
      <select value={sortOption} onChange={handleSort}>
        <option value="health">Health</option>
        <option value="damage">Damage</option>
        <option value="armor">Armor</option>
      </select>
    </div>
  );
};

export default SortBar;
