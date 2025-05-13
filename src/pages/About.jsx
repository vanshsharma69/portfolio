import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-screen text-white flex relative items-center py-10">
      
      {/* Sidebar - Visible on Desktop */}
      
      <aside className="hidden md:flex fixed top-1/2 -translate-y-1/2 left-6 flex-col items-start gap-4 p-5 backdrop-blur-md">
  <nav className="flex flex-col gap-6">
    <a href="#introduction" className="text-lg text-white font-semibold border-l-2 border-white pl-3 hover:text-blue-400 transition-all duration-300"> Introduction
    </a>
    <a href="#experience" className="text-lg text-gray-300 pl-3 hover:text-blue-400 transition-all duration-300">
      Work Experience
    </a>
    <a href="#studies" className="text-lg text-gray-300 pl-3 hover:text-blue-400 transition-all duration-300">
      Studies
    </a>
    <a href="#skills" className="text-lg text-gray-300 pl-3 hover:text-blue-400 transition-all duration-300">
      Technical Skills
    </a>
  </nav>
</aside>


      {/* Profile Section - Fixed on Desktop */}
      <section  className="hidden md:flex fixed top-28 left-72 flex-col items-center justify-center space-y-4">
        <img
          src={require('../assets/vansh.jpg')}  
          alt="Profile"
          className="w-40 h-40 rounded-full object-cover border-4 border-white/10"
        />
        <div className="text-sm text-gray-300 flex items-center gap-2">
          🌐 <span>Asia/India</span>
        </div>
        <div className="flex space-x-3">
          <button className="bg-white text-black px-4 py-1 rounded-full text-sm">English</button>
          <button className="bg-white/10 px-4 py-1 rounded-full text-sm text-gray-300">Hindi</button>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-1 w-full md:ml-[28rem] px-6 sm:px-10 md:px-20  md:mt-28 overflow-y-auto md:mb-28 mb-8">
        
        {/* Profile Section - Visible on Mobile */}
        <div className="md:hidden flex flex-col mb-8 justify-center items-center mt-10">
          <img
            src={require('../assets/vansh.jpg')}
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover border-4 border-white/10"
          />
          <div className="text-sm text-gray-300 flex items-center gap-2 mt-3">
            🌐 <span>Asia/India</span>
          </div>
          <div  className="flex space-x-3 mt-4">
            <button className="bg-white text-black px-4 py-1 rounded-full text-sm">English</button>
            <button className="bg-white/10 px-4 py-1 rounded-full text-sm text-gray-300">Hindi</button>
          </div>
        </div>

        {/* Header Section */}
        <header  id='introduction' className="flex flex-col sm:flex-row justify-between items-center sm:items-center mb-8">
          <div>
            <h1 className="text-5xl sm:text-6xl font-extrabold">Vansh <span className='text-blue-400'>Sharma</span> </h1>
            <h2 className="text-xl sm:text-2xl text-gray-500 mt-2">Full-Stack Developer</h2>
          </div>
          
        </header>

        {/* Social Links */}
        <div className="flex flex-wrap gap-3 mb-10 ">
          <button className="bg-white/10 px-4 py-2 rounded-full flex items-center space-x-2 text-sm">
            <span>🐱</span><span>GitHub</span>
          </button>
          <button className="bg-white/10 px-4 py-2 rounded-full flex items-center space-x-2 text-sm">
            <span>🔗</span><span>LinkedIn</span>
          </button>
          <button className="bg-white/10 px-4 py-2 rounded-full flex items-center space-x-2 text-sm">
            <span>✉️</span><span>Email</span>
          </button>
        </div>

        {/* Bio Section */}
        <section className="mb-16 flex flex-col sm:items-start sm:text-left items-center text-center justify-center">
  <p className="text-white max-w-3xl text-base sm:text-lg leading-relaxed">
    Vansh Sharma is a Computer Science student at GLA University, specializing in Flutter, React, and Java for DSA. Passionate about solving complex problems, he focuses on creating innovative digital solutions and thrives on continuous learning and collaboration.
  </p>

  <Link
    to="/contact"
    className="mt-10 inline-flex items-center gap-2 bg-black border border-white/30 hover:border-blue-400 transition px-6 py-3 text-white font-bold uppercase tracking-wider"
  >
    <span className="uppercase">Contact me</span>
  </Link>
</section>


        

        {/* Additional Content */}
        <section id="experience" className='mb-12'>
          <h3 className=" text-4xl md:text-5xl font-semibold mb-4"><span className='text-blue-400'>Experience</span></h3>
          <div class=" shadow-md rounded-lg max-w-xl  my-6">
          <h1 class="text-2xl font-bold text-gray-300 mb-1">Pregrad</h1>
          <span class="text-sm text-blue-600 font-semibold">ANDROID APP DEVELOPMENT TRAINEE</span>
          <ul className="list-none space-y-6 text-white">
          <li className="relative pl-6 mt-6">
            <span className="absolute left-0 top-1.5 h-2 w-2 bg-blue-400 rounded-full"></span>
            Designed and Developed a healthcare application to manage patient records and appointment scheduling using flutter and firebase.
          </li>
          <li className="relative pl-6">
            <span className="absolute left-0 top-1.5 h-2 w-2 bg-blue-400 rounded-full"></span>
            Integrated Firebase Authentication for secure user login and data protection via email/password authentication.
          </li>
        </ul>
        </div>
        <div class=" shadow-md rounded-lg max-w-xl  my-6">
          <h1 class="text-2xl font-bold text-gray-300 mb-1">FLUTTER FREELANCER</h1>
          <span class="text-sm text-blue-600 font-semibold">FRONT-END DEVELOPER</span>
          <ul className="list-none space-y-6 text-white">
          <li className="relative pl-6 mt-6">
            <span className="absolute left-0 top-1.5 h-2 w-2 bg-blue-400 rounded-full"></span>
            Designed and implemented user interfaces for mobile applications using Flutter.
          </li>
          <li className="relative pl-6">
            <span className="absolute left-0 top-1.5 h-2 w-2 bg-blue-400 rounded-full"></span>
            Focused on front-end development, building reusable components and custom layouts.
          </li>
        </ul>
        </div>
        </section>


        {/* Second section  */}


        <section id='studies' className='mb-8'>
          <h3 className="text-start text-4xl md:text-5xl font-semibold mb-8">Education</h3>
          <div class=" shadow-md rounded-lg max-w-xl  mb-8">
          <h1 class="text-xl font-bold text-white mb-2">GLA University</h1>
          <span class="text-lg text-grey-200 font-semibold">Persuing BTech in Computer Science and enginnering</span>
          
        </div>
        <div class=" shadow-md rounded-lg max-w-xl  my-8">
          <h1 class="text-2xl font-bold text-gray-300 mb-2">St. Francis Inter College</h1>
          <span class="text-xl text-gray-200 font-semibold">Completed 10th and 12th </span>
          
        </div>
        </section>

        {/* Section 3 */}
        <section >
  <div id='skills' class="max-w-7xl mx-auto">
    <h3 class="text-3xl md:text-5xl font-semibold mb-12 text-white">
      Technical <span class="text-blue-400">Skills</span>
    </h3>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

  {/* <!-- App Development Card --> */}
  <div class=" md:w-11/12 md:w-max-[100] shadow-xl hover:shadow-blue-500/40 rounded-2xl p-6 transform hover:-translate-y-2 hover:scale-[1.03] cursor-pointer group border border-slate-700 ">
    <h4 class="text-2xl font-bold text-white mb-6 tracking-wide group-hover:text-blue-300 transition-colors duration-300 text-center">App Development</h4>
    <div class="space-y-4">
      <div class="bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition duration-300 px-4 py-2 rounded-md text-sm text-blue-100 font-medium tracking-widest uppercase shadow-sm text-center">
        Flutter
      </div>
      <div class="bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition duration-300 px-4 py-2 rounded-md text-sm text-blue-100 font-medium tracking-widest uppercase shadow-sm text-center">
        Kotlin
      </div>
    </div>
  </div>

  {/* <!-- Web Development Card --> */}
  <div class=" shadow-xl hover:shadow-purple-400/40 rounded-2xl p-6 transform hover:-translate-y-2 hover:scale-[1.03] cursor-pointer group border border-slate-700">
    <h4 class="text-2xl font-bold text-white mb-6 tracking-wide group-hover:text-purple-200 transition-colors duration-300 text-center">Web Development</h4>
    <div class="space-y-4">
      <div class="bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition duration-300 px-4 py-2 rounded-md text-sm text-purple-100 font-medium tracking-widest uppercase shadow-sm text-center">
        React JS
      </div>
      <div class="bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition duration-300 px-4 py-2 rounded-md text-sm text-purple-100 font-medium tracking-widest uppercase shadow-sm text-center">
        Node JS
      </div>
      <div class="bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition duration-300 px-4 py-2 rounded-md text-sm text-purple-100 font-medium tracking-widest uppercase shadow-sm text-center">
        Express JS
      </div>
    </div>
  </div>

  {/* <!-- Data Structures Card --> */}
  <div class=" shadow-xl hover:shadow-cyan-400/40 rounded-2xl p-6 transform hover:-translate-y-2 hover:scale-[1.03] cursor-pointer group border border-slate-700">
    <h4 class="text-2xl font-bold text-white mb-6 tracking-wide group-hover:text-cyan-200 transition-colors duration-300 text-center">Data Structures</h4>
    <div class="space-y-4">
      <div class="bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition duration-300 px-4 py-2 rounded-md text-sm text-cyan-100 font-medium tracking-widest uppercase shadow-sm text-center">
        Java (DSA)
      </div>
      <div class="bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition duration-300 px-4 py-2 rounded-md text-sm text-cyan-100 font-medium tracking-widest uppercase shadow-sm text-center">
        Algorithms
      </div>
    </div>
  </div>

</div>

  </div>
</section>

      </main>
    </div>
  );
};

export default About;
