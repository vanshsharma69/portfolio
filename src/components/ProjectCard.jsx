import React from 'react';

const ProjectCard = ({ image, alt = 'Project Image', title = '', onClick }) => {
  return (
    <div
      className="w-full sm:w-1/2 lg:w-1/3 p-4 cursor-pointer"
      onClick={onClick}
      role="button"
      aria-label={alt}
    >
      <div className="relative group overflow-hidden rounded-xl bg-gray-800 shadow-md transition-all duration-500 ease-in-out hover:shadow-[0_10px_25px_rgba(0,255,255,0.4)] hover:scale-105">
        {/* Image */}
        <img
          src={image}
          alt={alt}
          className="w-full h-48 md:h-60 object-cover"
        />

        {/* Dark overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-500 ease-in-out" />

        {/* Title text with slide animation */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h3 className="text-white text-xl font-semibold opacity-0 translate-x-[-50%] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-in-out">
            {title}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
