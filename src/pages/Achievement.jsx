import React, { useState } from 'react';
import certificates from '../data/certificates';
import AchievementModal from '../components/AchievementModal';
import { FaTrophy, FaUsers, FaMedal, FaBookOpen, FaCertificate } from 'react-icons/fa';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';

const filterIcons = {
  All: <FaCertificate className="mr-2" />,
  Winner: <FaTrophy className="mr-2 text-yellow-400" />,
  Coordinator: <FaUsers className="mr-2 text-green-400" />,
  Participation: <FaMedal className="mr-2 text-blue-400" />,
  Course: <FaBookOpen className="mr-2 text-purple-400" />,
};

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
      <motion.h2
        className="text-center text-4xl font-extrabold text-cyan-400 uppercase tracking-tight drop-shadow mb-2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Achievements
      </motion.h2>

      <motion.p
        className="text-center text-xl mt-2 mb-12 font-semibold text-gray-200"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        My Certificates & Achievements
      </motion.p>

      {/* Filter Buttons */}
      <motion.div
        className="flex flex-wrap justify-center gap-4 mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        {filters.map(filter => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`flex items-center px-5 py-2 rounded-full font-semibold transition-all duration-300 shadow-lg border-2 transform hover:scale-105 ${
              activeFilter === filter
                ? 'bg-red-500 border-red-500 text-white scale-105'
                : 'bg-gray-100 border-gray-300 text-gray-800 hover:bg-red-500 hover:text-white hover:border-red-500'
            }`}
          >
            {filterIcons[filter]}
            {filter}
          </button>
        ))}
      </motion.div>

      {/* Certificate Cards */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center"
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
      >
        {filteredCertificates.length === 0 ? (
          <div className="col-span-full text-lg text-gray-300 italic">
            No certificates found for this category.
          </div>
        ) : (
          filteredCertificates.map(cert => (
            <motion.div
              key={cert.id}
              className="w-full max-w-xs"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <Tilt
                glareEnable={true}
                glareMaxOpacity={0.2}
                scale={1.05}
                transitionSpeed={1000}
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                className="rounded-2xl"
              >
                <div
                  className="bg-white/10 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 p-5 flex flex-col items-center cursor-pointer border border-gray-700 hover:border-cyan-400 group"
                  onClick={() => setSelectedImage(cert.image)}
                  tabIndex={0}
                  onKeyPress={e => {
                    if (e.key === 'Enter') setSelectedImage(cert.image);
                  }}
                >
                  <div className="w-full h-48 rounded-xl overflow-hidden mb-4 bg-gray-800 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="object-cover w-full h-full"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-cyan-300 mb-2 text-center">
                    {cert.title}
                  </h3>
                  <span className="text-xs px-3 py-1 rounded-full bg-cyan-700/60 text-white uppercase tracking-wide mb-2">
                    {cert.category}
                  </span>
                  <p className="text-sm text-gray-300 text-center line-clamp-2">
                    {cert.description}
                  </p>
                </div>
              </Tilt>
            </motion.div>
          ))
        )}
      </motion.div>

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
