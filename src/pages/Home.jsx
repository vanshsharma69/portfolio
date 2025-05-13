import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className="w-11/12 max-w-[1200px] mx-auto flex flex-col-reverse md:flex-row items-center justify-center min-h-screen px-6 md:px-12 gap-10 md:gap-20">

      {/* Image section (on top in mobile, left on desktop) */}
      

      {/* Text content */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, ease: 'easeInOut', delay: 0.8 }}
        className="w-full md:w-1/2 text-white"
      >
        {/* Project Badge */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration:1.5, delay: 0.8 }}
          className="inline-block mb-6"
        >
          <span className="text-xs font-medium text-white px-4 py-1 border border-blue/20 rounded-full bg-slate-900 backdrop-blur-md shine-effect">
  Recent project: <span className="font-bold">Ecozmy</span>
</span>

        </motion.div>

        {/* Hero Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-4xl md:text-6xl font-bold leading-tight mb-6"
        >
          Hello<br /> I'm Vansh Sharma
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-base md:text-xl text-white/60 max-w-2xl mb-8"
        >
          Ambitious Computer Science student with a foundation in programming, software development, and web technologies. Passionate about solving real-world challenges through innovative tech solutions.
        </motion.p>

        {/* About Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <Link
            to="/about"
            className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 transition px-4 py-2 rounded-full border border-white/20 text-sm"
          >
            <img
              src={require('../assets/vansh.jpg')}
              alt="Vansh Avatar"
              className="w-6 h-6 rounded-full"
            />
            <span>About – Vansh Sharma</span>
          </Link>
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration:1.5, delay: 0.8 }}
        className="w-full md:w-1/2 flex justify-center"
      >
        <img
          src={require('../assets/vansh.jpg')}
          alt="Vansh Avatar"
          className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-full"
        />
      </motion.div>
    </div>
  );
};

export default Home;
