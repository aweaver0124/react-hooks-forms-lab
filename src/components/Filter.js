import React, { useState } from "react";

function Filter({ onCategoryChange }) {
  const [filteredList, setFilterlist] = useState("All");

  function handleSearchFilter(event){
    setFilterlist(event.target.value)
  }

  return (
    <div className="Filter">
      <input 
        type="text" 
        onChange={handleSearchFilter}
        name="search" 
        placeholder="Search..." 
      />
      <select name="filter" onChange={onCategoryChange}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
