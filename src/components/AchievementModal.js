// src/components/AchievementModal.jsx
import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';

const AchievementModal = ({ image, onClose }) => {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black bg-opacity-80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="relative bg-gray-900 rounded-lg shadow-lg overflow-hidden max-w-[90vw] max-h-[90vh] w-full sm:w-[600px] md:w-[800px] lg:w-[900px] aspect-video flex items-center justify-center"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.8 }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            className="absolute top-3 right-3 text-white text-xl hover:text-red-500 transition"
            onClick={onClose}
            aria-label="Close"
          >
            <FaTimes />
          </button>

          {/* Image */}
          <img
            src={image}
            alt="Certificate"
            className="object-contain w-full h-full"
          />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default AchievementModal;
