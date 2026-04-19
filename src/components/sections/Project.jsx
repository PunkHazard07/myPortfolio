import React from "react";
import ProjectCard from "../ui/ProjectCard";

const Project = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
        <div className="space-y-4">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
            Selected <span className="text-violet-500 underline decoration-violet-500/30 underline-offset-8">Projects</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-xl leading-relaxed">
            A collection of my work focusing on modern web development, user interface design, and scalable backend systems.
          </p>
        </div>
        
        <a 
          href="https://github.com/PunkHazard07" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group flex items-center gap-2 text-zinc-300 hover:text-white transition-all duration-300"
        >
          <span className="font-medium">View all on GitHub</span>
          <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
          </svg>
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ProjectCard
          title="Travel Verse"
          description="A visually stunning travel platform designed to inspire and simplify global exploration with modern web technologies."
          image="https://res.cloudinary.com/dj52vohl0/image/upload/v1776604126/Screenshot_2026-04-19_134021_cra3uv.png" 
          tags={["React", "Tailwind CSS", "Vite"]}
          link="https://travel-verse-neon.vercel.app/"
        />

        <ProjectCard
          title="E-commerce Web App"
          description="A sophisticated full-stack platform featuring seamless product discovery, secure user authentication, and an intuitive shopping experience powered by the MERN stack."
          image="https://res.cloudinary.com/djbtdlzrj/image/upload/v1738102888/Screenshot_2025-01-28_232113_o3john.png"
          tags={["React", "Node.js", "MongoDB"]}
          link="https://creativefurniture.onrender.com"
        />

        <ProjectCard
          title="School Management System"
          description="A comprehensive administrative dashboard for educational institutions, streamlining student records, attendance tracking, and grading systems with real-time data management."
          image="https://res.cloudinary.com/djbtdlzrj/image/upload/v1738102417/Screenshot_2025-01-28_231209_wmkvwt.png"
          tags={["React", "Node.js", "MongoDB"]}
          link="https://chizzy-kids-school.onrender.com"
        />
      </div>
    </div>
  );
};

export default Project;
