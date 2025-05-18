
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

const SkillBar = ({ name, icon, percentage }) => {
  return (
    <div className="mb-6">
      <div className="flex items-center mb-2">
        <div className="text-2xl mr-3">{icon}</div>
        <h6 className="text-lg font-medium text-gray-800">{name}</h6>
        <span className="ml-auto font-medium text-gray-600">{percentage}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div 
          className="h-2.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-600"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-center text-3xl font-bold mb-12 text-gray-800">My Tech Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {skills.map((skillCategory, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
              <h4 className="text-xl font-semibold text-gray-700 mb-6 pb-2 border-b border-gray-200">
                {skillCategory.category}
              </h4>
              <div>
                {skillCategory.items.map((skill, idx) => (
                  <SkillBar
                    key={idx}
                    name={skill.name}
                    icon={skill.icon}
                    percentage={skill.percentage}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;