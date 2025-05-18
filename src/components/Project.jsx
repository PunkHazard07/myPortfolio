import React from "react";
import ProjectCard from "./ProjectCard";

const Project = () => {
return (
    <div className="bg-gray-100 py-16 px-6">
      {/* Title */}
    <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-10">
        My Projects
    </h2>

      {/* Project Cards Grid */}
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        <ProjectCard
        title="E-commerce Web App"
        description="A modern full-stack e-commerce platform built using React, Node.js, and MongoDB."
        image="https://res.cloudinary.com/djbtdlzrj/image/upload/v1738102888/Screenshot_2025-01-28_232113_o3john.png"
        link="https://creativefurniture.onrender.com"
        />

        <ProjectCard
        title="School Management System"
        description="A modern School Management System built using React, Node.js, and MongoDB."
        image="https://res.cloudinary.com/djbtdlzrj/image/upload/v1738102417/Screenshot_2025-01-28_231209_wmkvwt.png"
        link=""
        />
    </div>
    </div>
);
};

export default Project;
