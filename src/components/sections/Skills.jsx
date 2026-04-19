
import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNode, FaDatabase, FaGitAlt } from "react-icons/fa";

const skills = [
  {
    category: "Frontend Development",
    items: [
      { name: "HTML", icon: <FaHtml5 className="text-orange-500" />, percentage: 90 },
      { name: "CSS", icon: <FaCss3Alt className="text-blue-500" />, percentage: 80 },
      { name: "JavaScript", icon: <FaJs className="text-yellow-500" />, percentage: 65 },
      { name: "React", icon: <FaReact className="text-blue-300" />, percentage: 70 },
    ],
  },
  {
    category: "Backend Development",
    items: [
      { name: "Node.js", icon: <FaNode className="text-green-500" />, percentage: 70 },
      { name: "MongoDB", icon: <FaDatabase className="text-green-400" />, percentage: 65 }
    ],
  },
  {
    category: "Tools & Version Control",
    items: [
      { name: "Git", icon: <FaGitAlt className="text-red-500" />, percentage: 70 },
    ],
  },
];

const Skills = () => {
  const skills = [
    { category: "Frontend", items: ["React", "JavaScript", "Tailwind CSS", "HTML/CSS"] },
    { category: "Backend", items: ["Node.js", "Express", "MongoDB", "REST APIs"] },
    { category: "Tools", items: ["Git", "Vite", "Vercel", "Postman"] },
    { category: "Design", items: ["Figma", "Responsive Design", "UI/UX", "Animation"] },
  ];

  return (
    <div className="container mx-auto px-6">
      <div className="text-center mb-16 space-y-4">
        <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
          Technical <span className="text-violet-500">Expertise</span>
        </h2>
        <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
          A comprehensive toolkit developed through years of building digital products and solving complex problems.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {skills.map((group, index) => (
          <div 
            key={index} 
            className="p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800/50 hover:border-violet-500/30 transition-all duration-300 group"
          >
            <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2 group-hover:text-violet-400 transition-colors">
              <span className="w-1.5 h-6 bg-violet-600 rounded-full"></span>
              {group.category}
            </h3>
            <ul className="space-y-4">
              {group.items.map((skill, idx) => (
                <li key={idx} className="flex items-center gap-3 text-zinc-400 group-hover:text-zinc-300 transition-colors">
                  <svg className="w-4 h-4 text-violet-500/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm font-medium">{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;