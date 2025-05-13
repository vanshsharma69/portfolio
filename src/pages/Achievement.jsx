import React from 'react'
import Blog from '../assets/blogz_project.png';
import Login from '../assets/login_project.png';
import Task from '../assets/task_project.png';
import { useState } from 'react';
import AchievementCard from '../components/AchievementCard';
import AchievementModal from '../components/AchievementModal';

const Achievement = () => {
 const [selectedImage, setSelectedImage] = useState(null);

  const certificates = [Blog,Task,Login];

  return (
    <div className="min-h-screen text-white py-20 px-4">
      <h2 className="text-center text-4xl font-bold text-cyan-400 uppercase">Achievements</h2>
      <p className="text-center text-xl mt-2 mb-10 font-semibold">
        My Certificates & Achievements
      </p>

      <div className="flex flex-wrap justify-center">
        {certificates.map((img, index) => (
          <AchievementCard
            key={index}
            image={img}
            onClick={() => setSelectedImage(img)}
          />
        ))}
      </div>

      {selectedImage && (
        <AchievementModal image={selectedImage} onClose={() => setSelectedImage(null)} />
      )}
    </div>
  );
};

export default Achievement
