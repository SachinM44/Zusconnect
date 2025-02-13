import React from 'react';

const Filter = ({ filters, setFilters }) => {
  const handleDestinationChange = (e) => {
    setFilters({ ...filters, destination: e.target.value });
  };

  const handlePriceChange = (e) => {
    const { name, value } = e.target;
    const numberValue = value === '' ? Infinity : Number(value); // If empty, set to Infinity

    setFilters((prevFilters) => ({
      ...prevFilters,
      price: { ...prevFilters.price, [name]: numberValue },
    }));
  };

  return (
    <div className="mb-4 flex flex-col md:flex-row">
      <input
        type="text"
        placeholder="Filter by destination"
        value={filters.destination}
        onChange={handleDestinationChange}
        className="p-2 border rounded mb-2 md:mb-0 md:mr-2"
        aria-label="Destination Filter"
      />
      <input
        type="number"
        placeholder="Min price"
        name="min"
        value={filters.price.min === Infinity ? '' : filters.price.min} // Show empty if Infinity
        onChange={handlePriceChange}
        className="p-2 border rounded mb-2 md:mb-0 md:mr-2"
        aria-label="Minimum Price"
      />
      <input
        type="number"
        placeholder="Max price"
        name="max"
        value={filters.price.max === Infinity ? '' : filters.price.max} // Show empty if Infinity
        onChange={handlePriceChange}
        className="p-2 border rounded"
        aria-label="Maximum Price"
      />
    </div>
  );
};

export default Filter;
