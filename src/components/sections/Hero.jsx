import React, { useState, useEffect } from 'react';
import { FaDownload, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import  image from '../../assets/image.jpg';

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
    <div className={`relative min-h-[90vh] flex items-center px-6 lg:px-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(#27272a_1px,transparent_1px)] [background-size:24px_24px]"></div>
      </div>

      <div className="container mx-auto z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 py-12 md:py-24">
          {/* Left: Text Section */}
          <div className="w-full lg:w-3/5">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 font-medium text-xs uppercase tracking-wider">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500"></span>
                </span>
                Available for projects
              </div>
              
              <div className="space-y-4">
                <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.1]">
                  Building <span className="text-violet-500">digital experiences</span> that matter.
                </h1>
                <p className="text-zinc-400 text-lg md:text-xl max-w-2xl leading-relaxed">
                  I'm <span className="text-white font-medium">Bello Ayoola</span>, a Full-Stack Developer specializing in 
                  building scalable, modern web applications. Focused on clean code and exceptional user experiences.
                </p>
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                <button
                  onClick={() => scrollToSection('projects')}
                  className="bg-violet-600 hover:bg-violet-700 text-white px-8 py-4 rounded-xl font-semibold shadow-lg shadow-violet-600/20 transform hover:-translate-y-1 transition-all duration-200 flex items-center gap-2"
                >
                  <span>View Projects</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </button>

                <a 
                  href="https://drive.google.com/file/d/16kxX8uaexw50FylQ5QvOl-Kdr64LiyWy/view?usp=sharing" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="border border-zinc-800 hover:bg-zinc-900 text-zinc-100 px-8 py-4 rounded-xl font-semibold transition-all duration-200 flex items-center gap-2"
                >
                  <FaDownload className="text-sm" />
                  <span>Resume</span>
                </a>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-6 pt-6">
                <a
                  href="https://github.com/PunkHazard07"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-500 hover:text-white text-2xl transition-all duration-200"
                  aria-label="GitHub"
                >
                  <FaGithub />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-500 hover:text-white text-2xl transition-all duration-200"
                  aria-label="Twitter"
                >
                  <FaTwitter />
                </a>
              </div>
            </div>
          </div>

          {/* Right: Image Section */}
          <div className="w-full lg:w-2/5 flex justify-center lg:justify-end">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-zinc-800 shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
                <img 
                  src={image}    
                  alt="Bello Ayoola" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;