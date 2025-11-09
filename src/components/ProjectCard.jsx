// src/components/ProjectCard.jsx
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const ProjectCard = ({ project, onClick }) => (
  <motion.div
    variants={cardVariants}
    whileHover={{ scale: 1.05 }}
    className="w-full max-w-xs cursor-pointer"
  >
    <Tilt
      glareEnable={true}
      glareMaxOpacity={0.25}
      scale={1.03}
      tiltMaxAngleX={15}
      tiltMaxAngleY={15}
      transitionSpeed={1200}
      className="rounded-2xl"
    >
      <div
        className="group bg-white/10 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 p-5 flex flex-col items-center border border-gray-800 hover:border-cyan-400"
        onClick={onClick}
        tabIndex={0}
        onKeyPress={e => {
          if (e.key === 'Enter') onClick();
        }}
      >
        <div className="w-full h-44  overflow-hidden mb-4 bg-gray-800 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
          <img
            src={project.image}
            alt={project.alt}
            className="object-contain w-full h-full"
            loading="lazy"
          />
        </div>
        <h3 className="text-lg font-bold text-cyan-300 mb-1 text-center">{project.title}</h3>
        <p className="text-xs text-gray-300 text-center mb-2">{project.description}</p>
        <span className="text-xs px-3 py-1 rounded-full bg-cyan-700/60 text-white uppercase tracking-wide mb-2">
          {project.technologies}
        </span>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-cyan-400 hover:text-cyan-200 text-xs mt-2 transition"
          onClick={e => e.stopPropagation()}
        >
          View Code <FaExternalLinkAlt className="inline-block" />
        </a>
      </div>
    </Tilt>
  </motion.div>
);

export default ProjectCard;
