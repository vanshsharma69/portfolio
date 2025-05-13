import React from 'react';

const AchievementModal = ({ image, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
      <div className="relative bg-white rounded-lg p-4 max-w-3xl w-full">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-black font-bold text-xl"
        >
          ✕
        </button>
        <img src={image} alt="Full Certificate" className="w-full h-auto rounded" />
      </div>
    </div>
  );
};

export default AchievementModal;
