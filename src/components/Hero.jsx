import React, { useState, useEffect } from 'react';
import { FaDownload, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import  image from '../assets/image.jpg';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  // Animation effect on load
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Function to handle smooth scrolling
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`relative min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 overflow-hidden px-4 sm:px-6 lg:px-8 flex items-center transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-10 left-10 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 py-12 md:py-20">
          {/* Left: Text Section */}
          <div className="w-full lg:w-3/5 text-center lg:text-left">
            <div className="space-y-6">
              <div className="inline-block px-4 py-1 bg-blue-100 rounded-full text-blue-700 font-medium text-sm mb-2 transform hover:scale-105 transition duration-300">
                About Me
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Hello, I'm <span className="text-blue-600 relative">
                  Bello Ayoola
                  <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-600 transform origin-left scale-x-100"></span>
                </span>
              </h1>
              
              <h2 className="text-xl md:text-2xl font-medium text-gray-700">
                Full-stack Developer
                <span className="inline-block w-2 h-6 ml-1 animate-blink"></span>
              </h2>
              
              <p className="text-gray-600 text-lg max-w-2xl leading-relaxed">
                I'm a <span className="text-blue-600 font-semibold">Full-Stack Software Developer</span> specializing
                in modern web technologies such as <span className="font-medium">JavaScript, React, Node.js, Express, and MongoDB</span>. 
                I love building scalable, responsive, and user-friendly applications. Whether it's creating sleek 
                user interfaces or robust backends, I bring ideas to life with code. Let's create something amazing together!
              </p>

              {/* Buttons */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-8">
                <button
                  onClick={() => scrollToSection('projects')}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium shadow-lg transform hover:-translate-y-1 transition-all duration-200 flex items-center gap-2"
                >
                  <span>View My Work</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </button>

                <button 
                  onClick={() => scrollToSection('contact')}
                  className="border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white px-6 py-3 rounded-lg font-medium shadow-lg transform hover:-translate-y-1 transition-all duration-200"
                >
                  Contact Me
                </button>

                {/* Download CV Button */}
                <a 
                  href="https://drive.google.com/file/d/1eDlvBbi4-b6NKnSY20V12krDm9evMreP/view?usp=sharing" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium shadow-lg transform hover:-translate-y-1 transition-all duration-200 flex items-center gap-2"
                >
                  <FaDownload />
                  <span>Download CV</span>
                </a>
              </div>

              {/* Social Links */}
              <div className="flex items-center justify-center lg:justify-start gap-6 mt-6">
                <a
                  href="https://github.com/PunkHazard07"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-blue-600 text-2xl transform hover:scale-110 transition-all duration-200"
                  aria-label="GitHub"
                >
                  <FaGithub />
                </a>
                {/* <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-blue-600 text-2xl transform hover:scale-110 transition-all duration-200"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </a> */}
                <a
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-blue-600 text-2xl transform hover:scale-110 transition-all duration-200"
                  aria-label="Twitter"
                >
                  <FaTwitter />
                </a>
              </div>
            </div>
          </div>

          {/* Right: Image Section */}
          <div className="w-full lg:w-2/5 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-2xl transform hover:scale-105 transition duration-300">
                <img 
                  src={image}    
                  alt="Bello Ayoola" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-white text-blue-600 p-4 rounded-full shadow-lg">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;