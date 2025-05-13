import React, { useEffect, useState } from 'react';

const ProjectModal = ({ project, onClose }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (project) {
      
      setShow(true);
    }
  }, [project]);

  if (!project) return null;

  return (
    <div className=" fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
      <div
        className={`
          bg-white rounded-md p-6 w-full max-w-lg text-center transform transition-all duration-300
          ${show ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}
        `}
      >
        <h2 className="text-xl font-bold mb-2 text-black">{project.title}</h2>
        <p className="text-gray-600 mb-4">{project.description}</p>
        <p className="text-gray-700 font-semibold mb-6 uppercase tracking-widest text-sm">
          {project.technologies}
        </p>

        {/* Joined Button Style */}
        <div className="flex border-t border-gray-300 mt-6">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-1/2 py-3 text-white font-semibold uppercase tracking-wider bg-black hover:bg-gray-800 rounded-bl-md"
          >
            View Project
          </a>
          <button
            onClick={() => {
              // Optional fade-out animation
              setShow(false);
              setTimeout(onClose, 200); // match the animation duration
            }}
            className="w-1/2 py-3 text-white font-semibold uppercase tracking-wider bg-black hover:bg-gray-800 rounded-br-md"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
