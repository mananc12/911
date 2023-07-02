import React from 'react';

function SearchForm({ filter, sortBy, onFilterChange, onSortChange }) {
  return (
    <div>
      <label htmlFor="filter">Filter by Name or Area:</label>
      <input
        type="text"
        id="filter"
        value={filter}
        onChange={onFilterChange}
      />
      <label htmlFor="sort">Sort by:</label>
      <select id="sort" value={sortBy} onChange={onSortChange}>
        <option value="">None</option>
        <option value="name">Name</option>
        <option value="area">Area</option>
      </select>
    </div>
  );
}

export default SearchForm;
