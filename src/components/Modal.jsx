import React from 'react';
import { motion } from 'framer-motion';

const Modal = ({ itinerary, onClose }) => {
  if (!itinerary) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4">
      {/* Animated Modal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="bg-white bg-opacity-90 backdrop-blur-lg p-6 rounded-3xl shadow-2xl max-w-lg w-full transform"
      >
        {/* Title */}
        <h2 className="text-3xl font-extrabold text-gray-900 text-center">{itinerary.destination}</h2>
        
        {/* Image */}
        <img 
          src={itinerary.thumbnail} 
          alt={itinerary.destination} 
          className="w-full h-52 object-cover rounded-xl mt-4 shadow-md"
        />

        {/* Description */}
        <p className="mt-4 text-gray-700 text-lg leading-relaxed text-center">{itinerary.details}</p>

        {/* Close Button */}
        <div className="mt-6 flex justify-center">
          <button 
            onClick={onClose} 
            className="px-6 py-2 text-lg font-semibold rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-md hover:scale-105 transition-transform duration-300 focus:outline-none focus:ring-2 focus:ring-purple-300"
            aria-label={`Close modal for ${itinerary.destination}`}
          >
            Close
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Modal;
