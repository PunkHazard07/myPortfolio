import React from "react";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-zinc-500 text-sm">
            &copy; {new Date().getFullYear()} <span className="text-zinc-300 font-medium">Bello Ayoola</span>. All rights reserved.
          </div>
          
          <div className="flex items-center gap-8">
            <a 
              href="https://github.com/PunkHazard07" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-zinc-500 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <FaGithub size={20} />
            </a>
            <a 
              href="#" 
              className="text-zinc-500 hover:text-white text-sm font-medium transition-colors"
            >
              LinkedIn
            </a>
            <a 
              href="#" 
              className="text-zinc-500 hover:text-white text-sm font-medium transition-colors"
            >
              Twitter
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
