import React from 'react';
import ItineraryCard from './ItineraryCard';

const ItineraryList = ({ itineraries, onViewDetails }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {itineraries.length > 0 ? (
        itineraries.map((itinerary) => (
          <ItineraryCard 
            key={itinerary.id} 
            itinerary={itinerary} 
            onViewDetails={onViewDetails} 
          />
        ))
      ) : (
        <p className="col-span-full text-center">No itineraries found.</p>
      )}
    </div>
  );
};

export default ItineraryList;
