import React, { useState } from 'react';
import itineraries from './data/itineraries.json';
import ItineraryList from './components/ItineraryList';
import Filter from './components/Filter';
import Modal from './components/Modal';

const App = () => {
  const [filters, setFilters] = useState({ destination: '', price: { min: 0 , max: Infinity } });
  const [selectedItinerary, setSelectedItinerary] = useState(null);

  const filteredItineraries = itineraries.filter((itinerary) => {
    const isDestinationMatch = itinerary.destination.toLowerCase().includes(filters.destination.toLowerCase());
    const isPriceMatch =
      itinerary.price >= filters.price.min && itinerary.price <= filters.price.max;

    return isDestinationMatch && isPriceMatch;
  });

  const handleViewDetails = (itinerary) => {
    setSelectedItinerary(itinerary);
  };

  return (
    <div className="p-4 max-h-screen overflow-y-auto">
      <h1 className="text-3xl font-bold mb-4 text-center">Travel Itineraries</h1>
      <Filter filters={filters} setFilters={setFilters} />
      <ItineraryList itineraries={filteredItineraries} onViewDetails={handleViewDetails} />
      {selectedItinerary && (
        <Modal itinerary={selectedItinerary} onClose={() => setSelectedItinerary(null)} />
      )}
    </div>
  );
};

export default App;
