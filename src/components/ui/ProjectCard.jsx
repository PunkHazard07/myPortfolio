import React from "react";

const ProjectCard = ({ title, description, image, link, tags = [] }) => {
  return (
    <div className="group bg-zinc-900/50 rounded-2xl overflow-hidden border border-zinc-800/50 hover:border-violet-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-violet-500/10">
      {/* Image Container */}
      <div className="relative aspect-video overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 group-hover:rotate-1" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
        
        {/* Project Link Overlay */}
        {link && (
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-zinc-950 px-6 py-2.5 rounded-full font-bold text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 hover:bg-violet-500 hover:text-white"
            >
              View Project
            </a>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-8 space-y-4">
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span 
              key={index} 
              className="px-2.5 py-1 bg-violet-500/10 text-violet-400 text-[10px] font-bold uppercase tracking-wider rounded-md border border-violet-500/20"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="space-y-2">
          <h3 className="text-xl font-bold text-white group-hover:text-violet-400 transition-colors duration-300">
            {title}
          </h3>
          <p className="text-zinc-400 text-sm leading-relaxed">
            {description}
          </p>
          <div className="pt-4 border-t border-zinc-800/50 mt-4">
            <p className="text-zinc-500 text-xs flex items-center gap-2">
              <span>View backend on GitHub & don't forget to give a star! ⭐</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;