import React from "react";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
return (
    <footer className="bg-gray-900 text-white p-6">
    <div className="container mx-auto flex justify-between items-center">
        <a href="https://github.com/PunkHazard07" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
        <FaGithub size={24} />
        </a>
        <p>&copy; {new Date().getFullYear()}. All rights reserved.</p>
    </div>
    </footer>
);
};

export default Footer;
