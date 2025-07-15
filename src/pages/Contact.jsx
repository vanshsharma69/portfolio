import React from 'react'
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaHeart, FaCode, FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Contact = () => {
  return (
    <section className="text-white py-24 px-6 text-center flex flex-col items-center justify-center">
      {/* Headings */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-cyan-400 uppercase mb-2">
        Contact Me
      </h2>
      <h3 className="text-xl sm:text-2xl font-semibold mb-2">
        I'd Love To Hear From You.
      </h3>
      <p className="text-gray-400 max-w-3xl mx-auto mb-16 text-base sm:text-lg">
        Wanna collaborate or give some feedback? Just drop in a hello.
      </p>

      {/* Contact Info */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-16 mb-16">a
        {/* Location */}
        <div className="flex flex-col items-center">
          <FaMapMarkerAlt size={40} className="mb-4" />
          <h4 className="text-cyan-400 font-bold tracking-wide uppercase text-sm mb-1">Find Me @</h4>
          <p className="text-sm uppercase ">GLA University</p>
        </div>

        {/* Email */}
        <div className="flex flex-col items-center">
          <FaEnvelope size={40} className="mb-4" />
          <h4 className="text-cyan-400 font-bold tracking-wide uppercase text-sm mb-1">Email Me @</h4>
          <p className="text-sm">01vanshsharma@gmail.com</p>
        </div>

        {/* Phone */}
        <div className="flex flex-col items-center">
          <FaPhoneAlt size={40} className="mb-4" />
          <h4 className="text-cyan-400 font-bold tracking-wide uppercase text-sm mb-1">Call Me @</h4>
          <p className="text-sm">Mobile: (+91) 8954299517</p>
        </div>
      </div>

      {/* Footer */}
      <div className="text-gray-500 text-sm flex flex-col items-center gap-4">
        <p className="flex items-center gap-2">
          © Vansh 2025 | <FaCode /> with <FaHeart className="text-gray-300" /> by <span className="text-white font-semibold">Vansh Sharma</span>
        </p>

        {/* Social Icons */}
        <div className="flex gap-6 mt-4 text-white text-xl">
          <a href="https://github.com/vanshsharma69" target='_blank' className="hover:text-cyan-400"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/vansh-sharma-5061762bb/" target='_blank' className="hover:text-cyan-400"><FaLinkedin /></a>
          <a href="#" className="hover:text-cyan-400"><FaInstagram /></a>
        </div>
      </div>
    </section>
  );
}
export default Contact
