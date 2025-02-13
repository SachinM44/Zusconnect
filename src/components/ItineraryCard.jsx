import React from 'react';
import { motion } from 'framer-motion';

const ItineraryCard = ({ itinerary, onViewDetails }) => {
  return (
    <motion.div 
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="bg-white bg-opacity-90 backdrop-blur-lg border border-gray-200 p-5 rounded-2xl shadow-lg transition-shadow duration-300"
    >
      {/* Destination Image */}
      <img 
        src={itinerary.thumbnail} 
        alt={itinerary.destination} 
        className="w-full h-40 object-cover rounded-xl shadow-md"
      />

      {/* Destination & Duration */}
      <h2 className="text-2xl font-extrabold text-gray-900 mt-4">{itinerary.destination}</h2>
      <p className="text-gray-600 text-sm">{itinerary.duration}</p>

      {/* Price */}
      <p className="text-lg font-semibold text-purple-600 mt-2">₹{itinerary.price.toLocaleString()}</p>

      {/* View Details Button */}
      <button 
        className="mt-4 w-full px-5 py-2 text-lg font-medium rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-md hover:scale-105 transition-transform duration-300 focus:outline-none focus:ring-2 focus:ring-purple-300"
        onClick={() => onViewDetails(itinerary)}
      >
        View Details
      </button>
    </motion.div>
  );
};

export default ItineraryCard;
