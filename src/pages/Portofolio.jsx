import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Project from '../components/Project';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Portofolio = () => {
const [showButton, setShowButton] = useState(false);

  // Show button when scrolling down
useEffect(() => {
    const handleScroll = () => {
    if (window.scrollY > 300) {
        setShowButton(true);
    } else {
        setShowButton(false);
    }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
}, []);

  // Scroll to top function
const scrollToTop = () => {
    window.scrollTo({
    top: 0,
    behavior: "smooth",
    });
};
return (
    <div className="scroll-smooth">
        <Navbar />
        <Hero />
        <div>
        <section id="projects">
        <Project />
        </section>
        <section id="skills">
        <Skills />
        </section>
        <section id="contact">
        <Contact />
        </section>
    </div>
    <Footer />

      {/* Back to Top Button */}
    {showButton && (
        <button
        onClick={scrollToTop}
        className="fixed bottom-5 right-5 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition duration-300"
        >
        <FaArrowUp className="text-xl" />
        </button>
    )}
    </div>
);
};

export default Portofolio;
