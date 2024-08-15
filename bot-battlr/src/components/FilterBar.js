import React, { useState } from "react";

const FilterBar = ({ onFilter }) => {
  const [selectedClasses, setSelectedClasses] = useState({});

  const handleFilter = (e) => {
    const { value, checked } = e.target;
    setSelectedClasses((prev) => ({ ...prev, [value]: checked }));
    onFilter(selectedClasses);
  };

  return (
    <div>
      <label>Filter by class:</label>
      {["Support", "Medic", "Assault", "Defender", "Captain", "Witch"].map(
        (cls) => (
          <div key={cls}>
            <input
              type="checkbox"
              value={cls}
              checked={selectedClasses[cls]}
              onChange={handleFilter}
            />
            <span>{cls}</span>
          </div>
        )
      )}
    </div>
  );
};

export default FilterBar;
