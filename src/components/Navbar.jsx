import React from "react";

const Navbar = () => {
return (
    <nav className="bg-gray-900 text-white p-4 shadow-lg">
    <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">MyPortfolio</h1>
        <div className="flex space-x-6">
    <a href="#projects" className="hover:text-gray-400">Projects</a>
    <a href="#skills" className="hover:text-gray-400">Skills</a>
    <a href="#contact" className="hover:text-gray-400">Contact</a>
        </div>
    </div>
    </nav>
);
};

export default Navbar;
