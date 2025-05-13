import React from 'react';

const ProjectCard = ({ image, alt, onClick }) => {
  return (
    <div
      className="w-full sm:w-1/2 lg:w-1/3 p-4 cursor-pointer"
      onClick={onClick}
    >
      <div className="overflow-hidden rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 bg-gray-800">
        <div className="h-48 md:h-60 w-full">
          <img
            src={image}
            alt={alt}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
