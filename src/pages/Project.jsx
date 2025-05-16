import ProjectCard from '../components/ProjectCard';
import Blog from '../assets/blogz_project.png';
import Login from '../assets/login_project.png';
import Task from '../assets/task_project.png';
import ProjectModal from '../components/ProjectModal';
import { useState } from 'react';
import Ecomzy from '../assets/Project/Ecomzy.png';
import SoftSell from '../assets/Project/Soft_Sell.png'; 
const Project = () => {
  const [selectedProject, setSelectedProject] = useState(null);

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

  return (
    <div className="min-h-screen text-white py-20 px-4">
      <h2 className="text-center text-4xl font-bold text-cyan-400 uppercase">Projects</h2>
      <p className="text-center text-xl mt-2 mb-10 text-white font-semibold">
        Check Out Some of My Works
      </p>

      <div className="flex flex-wrap justify-center">
        {projectData.map((project, index) => (
          <ProjectCard
            key={index}
            image={project.image}
            alt={project.alt}
            onClick={() => setSelectedProject(project)}
          />
        ))}
      </div>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </div>
  );
};

export default Project;
