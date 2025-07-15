// src/components/ProjectModal.jsx
import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black bg-opacity-90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="relative bg-gradient-to-br from-gray-900/90 via-blue-900/80 to-cyan-900/80 rounded-2xl shadow-xl overflow-y-auto max-h-[90vh] w-full sm:max-w-[520px] md:max-w-[720px] p-6 sm:p-8"
          initial={{ scale: 0.85, opacity: 0.7 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.85, opacity: 0.7 }}
          transition={{ type: 'spring', stiffness: 260, damping: 30 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Glowing border */}
          <div className="absolute inset-0 pointer-events-none rounded-2xl border-2 border-cyan-400 opacity-40 blur-[2px] animate-pulse z-10" />

          {/* Close Button */}
          <button
            className="absolute top-4 right-4 text-white text-2xl hover:text-red-500 transition z-20"
            onClick={onClose}
            aria-label="Close"
          >
            <FaTimes />
          </button>

          {/* Project Image */}
          <motion.div
            className="w-full flex justify-center items-center mt-8 mb-6"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6, type: 'spring', stiffness: 120 }}
          >
            <div className="relative w-full max-w-md aspect-[16/10] rounded-xl overflow-hidden shadow-lg bg-gray-800 border border-cyan-700/50">
              <img
                src={project.image}
                alt={project.alt}
                className="object-contain w-full h-full transition-transform duration-500 hover:scale-105"
                loading="lazy"
              />
              {/* Reflection */}
              <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-white/20 via-transparent to-transparent pointer-events-none rounded-t-xl" />
            </div>
          </motion.div>

          {/* Project Details */}
          <div className="text-center flex flex-col items-center z-20 px-2">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-cyan-300 mb-2 drop-shadow">
              {project.title}
            </h3>
            <p className="text-gray-200 mb-3 text-sm sm:text-base md:text-lg leading-relaxed">
              {project.description}
            </p>
            <span className="text-xs sm:text-sm px-4 py-1 rounded-full bg-cyan-700/70 text-white uppercase tracking-wide mb-4 inline-block shadow">
              {project.technologies}
            </span>
            <div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-cyan-300 hover:text-cyan-100 text-sm sm:text-base font-semibold mt-2 transition"
              >
                View Code <FaExternalLinkAlt className="inline-block" />
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectModal;
