import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNode, FaDatabase, FaGitAlt } from "react-icons/fa";

const skills = [
{
    category: "Frontend Development",
    items: [
    { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-500" /> },
    { name: "React", icon: <FaReact className="text-blue-300" /> },
    ],
    },
    {
    category: "Backend Development",
    items: [
    { name: "Node.js", icon: <FaNode className="text-green-500" /> },
    { name: "MongoDB", icon: <FaDatabase className="text-green-400" /> }
    ],
},
{
    category: "Tools & Version Control",
    items: [
    { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
    ],},
];

const Skills = () => {
return (
    <section className="bg-gray-100 py-16">
    <div className="container mx-auto px-6">
        <h2 className="text-center text-3xl font-bold mb-8">Tech Stack</h2>
        {skills.map((skillCategory, index) => (
        <div key={index} className="mb-12">
            <h4 className="text-xl font-semibold text-gray-700 mb-4">{skillCategory.category}</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {skillCategory.items.map((skill, idx) => (
                <div
                key={idx}
                className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center justify-center text-center transform transition duration-300 hover:scale-105"
                >
                <div className="text-4xl mb-2 flex justify-center">{skill.icon}</div>
                <h6 className="text-lg font-semibold text-gray-800">{skill.name}</h6>
                </div>
            ))}
            </div>
        </div>
        ))}
    </div>
    </section>
);
};

export default Skills;



