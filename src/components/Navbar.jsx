import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-900 text-white p-4 shadow-lg">
      <div className="container mx-auto">
        {/* Desktop Navigation */}
        <div className="hidden md:flex justify-center items-center">
          <ul className="flex space-x-12">
            <li>
              <a 
                href="#projects" 
                className="text-lg font-medium hover:text-gray-400 transition-colors duration-300 relative group"
              >
                Projects
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
              </a>
            </li>
            <li>
              <a 
                href="#skills" 
                className="text-lg font-medium hover:text-gray-400 transition-colors duration-300 relative group"
              >
                Skills
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
              </a>
            </li>
            <li>
              <a 
                href="#contact" 
                className="text-lg font-medium hover:text-gray-400 transition-colors duration-300 relative group"
              >
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
              </a>
            </li>
          </ul>
        </div>

        {/* Mobile Navigation Button */}
        <div className="md:hidden flex justify-center">
          <button 
            onClick={toggleMenu} 
            className="focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M6 18L18 6M6 6l12 12" 
                />
              ) : (
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M4 6h16M4 12h16M4 18h16" 
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 flex flex-col items-center">
          <a 
            href="#projects" 
            className="block py-2 text-center w-full hover:bg-gray-800 transition-colors duration-300"
            onClick={toggleMenu}
          >
            Projects
          </a>
          <a 
            href="#skills" 
            className="block py-2 text-center w-full hover:bg-gray-800 transition-colors duration-300"
            onClick={toggleMenu}
          >
            Skills
          </a>
          <a 
            href="#contact" 
            className="block py-2 text-center w-full hover:bg-gray-800 transition-colors duration-300"
            onClick={toggleMenu}
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;