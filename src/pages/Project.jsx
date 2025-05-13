import ProjectCard from '../components/ProjectCard';
import Blog from '../assets/blogz_project.png';
import Login from '../assets/login_project.png';
import Task from '../assets/task_project.png';
import ProjectModal from '../components/ProjectModal';
import { useState } from 'react';

const Project = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projectData = [
    {
      image: Blog,
      alt: 'NFT Project',
      title: 'NFT Based E-Commerce Website',
      description: 'Blockchain based warranty using NFT',
      technologies: 'EXPRESS JS, NODE JS, REACT JS, MONGODB, SOLIDITY',
      link: 'https://example.com/nft-project',
    },
    {
      image: Login,
      alt: 'Login System',
      title: 'Collab App',
      description: 'Real-time collaboration app',
      technologies: 'REACT, NODE, SOCKET.IO',
      link: 'https://example.com/collab-app',
    },
    {
      image: Task,
      alt: 'Task Manager',
      title: 'Blog Platform',
      description: 'Minimal blog system',
      technologies: 'NEXT.JS, TAILWIND, MONGODB',
      link: 'https://example.com/blog',
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
