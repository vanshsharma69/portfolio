// src/pages/Project.jsx
import { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import ProjectModal from '../components/ProjectModal';
import Blog from '../assets/blogz_project.png';
import Login from '../assets/login_project.png';
import Task from '../assets/task_project.png';
import Ecomzy from '../assets/Project/Ecomzy.png';
import SoftSell from '../assets/Project/Soft_Sell.png';
import { motion } from 'framer-motion';

const projectData = [
  {
    image: Blog,
    alt: 'BLOGZ WEBSITE',
    title: 'API BASED BLOGZ Website',
    description: 'USED CONTEXT API WITH GLOBAL STATEMANAGEMENT',
    technologies: 'REACT JS, TAILWIND CSS, API',
    link: 'https://github.com/vanshsharma69/blogs-context',
  },
  {
    image: Ecomzy,
    alt: 'Ecomzy Store',
    title: 'Ecommerce Store',
    description: 'USED Redux',
    technologies: 'REACT JS, TAILWIND CSS, API , REDUX',
    link: 'https://github.com/vanshsharma69/ecomzy-store',
  },
  {
    image: SoftSell,
    alt: 'SOFT-SELL',
    title: 'SOFT-SELL',
    description: 'Internship Assignment',
    technologies: 'REACT JS,Framer-motion, Typewrite, Tailwind CSS Lucide Icons',
    link: 'https://github.com/vanshsharma69/soft-sell',
  },
  {
    image: Login,
    alt: 'Login System',
    title: 'LOGIN SCREEN UI/DESIGN',
    description: 'ROUTING CONCEPT USED',
    technologies: 'REACT JS,REACT-ROUTER',
    link: 'https://github.com/vanshsharma69/router-project-starter',
  },
  {
    image: Task,
    alt: 'Task Manager',
    title: 'DRAG AND DROP APP',
    description: 'DRAG AND DROP CONCEPT',
    technologies: 'REACT JS, TAILWIND CSS , REACT-DND',
    link: 'https://github.com/vanshsharma69/Task_list',
  },
];

const Project = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="min-h-screen  text-white py-20 px-4">
      <motion.h2
        className="text-center text-4xl font-extrabold text-cyan-400 uppercase tracking-tight drop-shadow mb-2"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Projects
      </motion.h2>
      <motion.p
        className="text-center text-xl mt-2 mb-12 font-semibold text-gray-200"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.7 }}
      >
        Check Out Some of My Works
      </motion.p>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center"
        initial="hidden"
        animate="visible"
        variants={{
          visible: { transition: { staggerChildren: 0.18 } },
        }}
      >
        {projectData.map((project, idx) => (
          <ProjectCard
            key={idx}
            project={project}
            onClick={() => setSelectedProject(project)}
          />
        ))}
      </motion.div>
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </div>
  );
};

export default Project;
