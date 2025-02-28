import React from "react";

const ProjectCard = ({ title, description, image, link }) => {
return (
    <div className="max-w-sm bg-white shadow-lg rounded-xl overflow-hidden transform transition duration-300 hover:scale-105">
      {/* Image */}
    <img src={image} alt={title} className="w-full h-48 object-cover" />

      {/* Card Content */}
    <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-800">{title}</h3>
        <p className="text-gray-600 mt-3">{description}</p>

        {/* Link Button */}
        <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-block bg-blue-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
        View Project
        </a>
    </div>
    </div>
);
};

export default ProjectCard;