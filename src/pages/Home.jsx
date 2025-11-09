import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import github from "../assets/github.png";
import { FaPlaneDeparture, FaDrum, FaFutbol, FaFilm } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Card from '../components/Card';
import DownloadResume from '../components/DownloadResume';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3, duration: 0.8, ease: "easeOut" }
  })
};

const Home = () => {
  return (
    <div className="text-white">

      {/* Hero Section */}
      <div className="w-11/12 max-w-[1200px] mx-auto flex flex-col-reverse md:flex-row items-center justify-center min-h-screen px-6 md:px-12 gap-10 md:gap-20">

        {/* Text Content */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="w-full md:w-1/2"
        >
          <div className="inline-block mb-6">
            <a href='https://github.com/vanshsharma69/ecomzy-store' target="_blank" rel="noopener noreferrer">
            <span className="text-xs font-medium text-white px-4 py-1 border border-blue-400 rounded-full bg-slate-900 backdrop-blur-md shine-effect">
              Recent project: <span className="font-bold">Ecomzy</span>
            </span>

            </a>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Hello<br /> I'm Vansh Sharma
          </h1>

          <p className="text-base md:text-xl text-white/60 max-w-2xl mb-8">
            Ambitious Computer Science student passionate about solving real-world challenges through innovative tech solutions.
          </p>

          <div
  className="inline-flex items-center gap-2 border border-white/30 hover:border-blue-400 transition px-6 py-3 text-white font-bold uppercase tracking-wider"
>
  <DownloadResume></DownloadResume>
</div>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 flex justify-center"
        >
          <img
            src={require('../assets/vansh.jpg')}
            alt="Vansh Avatar"
            className="w-48 h-48 md:w-64 md:h-64 mt-20 md:mt-0 object-cover rounded-full shadow-xl shadow-blue-500/20"
          />
        </motion.div>
      </div>

      {/* Coding Statistics */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="px-4 py-10"
      >
        <h2 className="text-center text-3xl md:text-4xl font-bold text-cyan-400 uppercase">My Coding Statistics</h2>
        <p className="text-center text-white text-sm md:text-xl uppercase mt-2 font-semibold">DSA Platforms</p>

        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-6">
          <a
            href="https://leetcode.com/u/dZHePXFlqH/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8/12 md:w-auto text-center inline-flex items-center justify-center gap-2 border border-white/30 hover:border-blue-400 transition px-6 py-3 text-white font-bold uppercase tracking-wider"
          >
            LeetCode Profile
          </a>
          <a
            href="https://github.com/vanshsharma69"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8/12 md:w-auto text-center inline-flex items-center justify-center gap-2 border border-white/30 hover:border-blue-400 transition px-6 py-3 text-white font-bold uppercase tracking-wider"
          >
            GitHub Profile
          </a>
        </div>
      </motion.div>

      {/* Project Screenshot */}
      <motion.div
        className="flex justify-center items-center px-4 py-10"
        initial="hidden"
        whileInView="visible"
        variants={fadeUp}
        viewport={{ once: true }}
      >
        <div className="rounded-lg overflow-hidden w-full max-w-[1000px] mx-auto shadow-lg shadow-white/10">
          <img src={github} alt="Login Project Screenshot" className="w-full h-auto" />
        </div>
      </motion.div>

      {/* Interests & Hobbies Section */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="px-4 py-16 text-white"
      >
        <section className="max-w-6xl mx-auto">
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
              text="I love travelling. My ultimate passion is to travel and explore the world. I would love to travel across the globe."
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

          {/* Mobile Swiper View */}
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
        </section>

        {/* Contact Me Button */}
        <div className='flex justify-center mt-10'>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-black border border-white/30 hover:border-blue-400 transition px-6 py-3 text-white font-bold uppercase tracking-wider"
          >
            <span className="uppercase">Contact me</span>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
