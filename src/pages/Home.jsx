import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import github from "../assets/github.png"
import { FaPlaneDeparture, FaDrum, FaFutbol, FaFilm } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Card from '../components/Card';

const Home = () => {
  return (
    <div>
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
           className="inline-flex items-center gap-2 bg-black border border-white/30 hover:border-blue-400 transition px-6 py-3 text-white font-bold uppercase tracking-wider"
          >
            
            <button className='uppercase'>More about me </button>
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
   {/* Section: Coding Statistics */}
<motion.div
  initial={{ opacity: 0, y: 60 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1.5, delay: 0.8 }}
  className="px-4 py-10"
>
  <h2 className="text-center text-3xl md:text-4xl font-bold text-cyan-400 uppercase">
    My Coding Statistics
  </h2>
  <p className="text-center text-lg md:text-xl mt-2 font-semibold">
    My Certificates & Achievements
  </p>

  {/* Buttons */}
  <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-6">
    <a
      href="#"
      className="w-full md:w-auto text-center inline-flex items-center justify-center gap-2  border border-white/30 hover:border-blue-400 transition px-6 py-3 text-white font-bold uppercase tracking-wider"
    >
      LeetCode Profile
    </a>
    <a
      href="#"
      className="w-full md:w-auto text-center inline-flex items-center justify-center gap-2  border border-white/30 hover:border-blue-400 transition px-6 py-3 text-white font-bold uppercase tracking-wider"
    >
      GitHub Profile
    </a>
  </div>
</motion.div>

{/* Section: Project Screenshot */}
<motion.div
  className="flex justify-center items-center px-4 py-10"
  initial={{ opacity: 0, y: 60 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1.5, delay: 1.2 }}
>
  <div className="rounded-lg overflow-hidden w-full max-w-[1000px] mx-auto">
  <img
    src={github}
    alt="Login Project Screenshot"
    className="w-full h-auto"
  />
</div>
</motion.div>

<motion.div>
<motion.div
  initial={{ opacity: 0, y: 60 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1.5, delay: 0.8 }}
  className="px-4 py-16 text-white"
>
  <section className="px-4 py-16 text-white">
      <div id="interests" className="max-w-6xl mx-auto">
        <h3 className="text-3xl md:text-5xl font-semibold mb-12 text-white text-center">
          INTERESTS & <span className="text-blue-400">HOBBIES</span>
        </h3>

        {/* Desktop View */}
        <div className="hidden md:flex justify-between gap-6">
          <Card
            icon={<FaFilm size={40} className="text-blue-300" />}
            title="Eat. Sleep. ___ . Repeat."
            color="blue"
            text="When I am not studying you can usually find me watching movies or listening to music! And I hate sitting idle."
          />
          <Card
            icon={<FaPlaneDeparture size={40} className="text-cyan-300" />}
            title="Travelling & Exploring"
            color="cyan"
            text="I love travelling. My ultimate passion is to travel and explore the world. I would love to travel acroos the globe."
          />
          <Card
            icon={<FaDrum size={40} className="text-purple-300" />}
            title="Playing Drums"
            color="purple"
            text="I use to play drums. I am not a professional drummer but yeah I can match with the beats of the music. I love music."
          />
          <Card
            icon={<FaFutbol size={40} className="text-green-300" />}
            title="Sports"
            color="green"
            text="My love for sports changes with place and people I am with. All-time favourites include Football, Cricket and Badminton!"
          />
        </div>

        {/* Mobile View: Swiper */}
        <div className="md:hidden">
          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            pagination={{ clickable: true }}
            modules={[Pagination]}
          >
            <SwiperSlide>
              <Card
                icon={<FaPlaneDeparture size={40} className="text-cyan-300" />}
                title="Travelling & Exploring"
                color="cyan"
                text="I love travelling. My ultimate passion is to travel and explore the world. I would love to leave my footprints across the globe while I am working."
              />
            </SwiperSlide>
            <SwiperSlide>
              <Card
                icon={<FaDrum size={40} className="text-purple-300" />}
                title="Playing Drums"
                color="purple"
                text="I use to play drums. I am not a professional drummer but yeah I can match with the beats of the music. I love music."
              />
            </SwiperSlide>
            <SwiperSlide>
              <Card
                icon={<FaFutbol size={40} className="text-green-300" />}
                title="Sports"
                color="green"
                text="My love for sports changes with place and people I am with. All-time favourites include Football, Cricket and Badminton!"
              />
            </SwiperSlide>
          </Swiper>
        </div>
        
      </div>
    </section>
    <div className='flex justify-center' ><Link
        to="/contact"
        className="mt-10 inline-flex items-center gap-2 bg-black border border-white/30 hover:border-blue-400 transition px-6 py-3 text-white font-bold uppercase tracking-wider"
      >
        <span className="uppercase">Contact me</span>
      </Link></div>
</motion.div>
</motion.div>


  </div>
  );
};

export default Home;
