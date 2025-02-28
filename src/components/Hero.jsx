import React from 'react';
import { FaDownload, FaGithub } from 'react-icons/fa';
const Hero = () => {
    // Function to handle smooth scrolling
const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
    }
};
    return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-between bg-gray-100 min-h-screen px-8 py-20">
    
      {/* Left: Text Section */}
    <div className="max-w-2xl text-center md:text-left">
        <h3 className="text-xl text-blue-600 font-semibold">About Me</h3>
        <h1 className="text-5xl font-extrabold text-gray-900 mt-4">Bello Ayoola</h1>
        <h4 className="text-2xl font-semibold text-gray-700 mt-2">Full-stack Developer</h4>
        <p className="text-gray-600 mt-4 text-lg leading-relaxed">
        I'm a <strong className="text-blue-500">Full-Stack Software Developer</strong> specializing
        in modern web technologies such as <strong>JavaScript, React, Node.js, Express, and MongoDB</strong>. 
        I love building scalable, responsive, and user-friendly applications. Whether it's creating sleek 
        user interfaces or robust backends, I bring ideas to life with code. Let's create something amazing together!
        </p>

        {/* Buttons */}
        <div className="mt-6 flex flex-col md:flex-row items-center gap-4">
        <button
            onClick={() => scrollToSection('projects')}
            className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold shadow-md hover:bg-blue-700 transition">
            View My Work
        </button>

        <button 
            onClick={() => scrollToSection('contact')}
            className="bg-gray-800 text-white px-6 py-3 rounded-full font-semibold shadow-md hover:bg-gray-900 transition">
            Contact Me
        </button>

          {/* Download CV Button */}
        <a href="https://drive.google.com/file/d/1eDlvBbi4-b6NKnSY20V12krDm9evMreP/view?usp=sharing" download target="_blank">
            <button className="flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-full font-semibold shadow-md hover:bg-green-700 transition">
            <FaDownload />
            Download CV
            </button>
        </a>
        </div>

        {/* Social Links */}
        <div className="mt-6">
        <a
            href="https://github.com/PunkHazard07"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 text-3xl hover:text-gray-900 transition"
        >
            <FaGithub />
        </a>
        </div>
    </div>

      {/* Right: Image Section */}
    <div className="w-64 h-64 md:w-80 md:h-80">
        <img 
        src=""
        alt="Bello Ayoola" 
        className="w-full h-full object-cover rounded-full shadow-lg"
        />
    </div>

    </div>
);
};

export default Hero;
