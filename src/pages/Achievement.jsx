import React, { useState } from 'react';
import certificates from '../data/certificates';
import AchievementCard from '../components/AchievementCard';
import AchievementModal from '../components/AchievementModal';

const Achievement = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Winner', 'Coordinator', 'Participation', 'Course'];

  const filteredCertificates =
    activeFilter === 'All'
      ? certificates
      : certificates.filter(cert => cert.category === activeFilter);

  return (
    <div className="min-h-screen text-white py-20 px-4">
      <h2 className="text-center text-4xl font-bold text-cyan-400 uppercase">
        Achievements
      </h2>
      <p className="text-center text-xl mt-2 mb-10 font-semibold">
        My Certificates & Achievements
      </p>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {filters.map(filter => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-4 py-2 rounded-full font-semibold transition-all duration-200 ${
              activeFilter === filter
                ? 'bg-red-500 text-white'
                : 'bg-gray-200 text-gray-800 hover:bg-red-500 hover:text-white'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Certificate Cards */}
      <div className="flex flex-wrap justify-center gap-6">
        {filteredCertificates.map(cert => (
          <AchievementCard
            key={cert.id}
            image={cert.image}
            title={cert.title}
            onClick={() => setSelectedImage(cert.image)}
          />
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <AchievementModal
          image={selectedImage}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </div>
  );
};

export default Achievement;
