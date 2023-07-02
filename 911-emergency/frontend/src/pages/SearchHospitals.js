import React, { useState } from 'react';

import SearchForm from '../components/SearchForm';
import HospitalTable from '../components/HospitalTable';


function SearchHospitalsPage() {
  const [filter, setFilter] = useState('');
  const [sortBy, setSortBy] = useState('');

  // Function to handle filter change
  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  // Function to handle sort change
  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };

  return (
    <div>
      <h1>Search Hospitals</h1>
      <SearchForm
        filter={filter}
        sortBy={sortBy}
        onFilterChange={handleFilterChange}
        onSortChange={handleSortChange}
      />
      <HospitalTable filter={filter} sortBy={sortBy} />
    </div>
  );
}

export default SearchHospitalsPage;
