import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Hero from '../components/sections/Hero';
import Project from '../components/sections/Project';
import Skills from '../components/sections/Skills';
import Contact from '../components/sections/Contact';

const Portfolio = () => {
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
    <div className="min-h-screen bg-zinc-950 text-zinc-100 selection:bg-violet-500/30">
        <Navbar />
        <main>
            <Hero />
            <section id="projects" className="py-20">
                <Project />
            </section>
            <section id="skills" className="py-20 bg-zinc-900/30">
                <Skills />
            </section>
            <section id="contact" className="py-20">
                <Contact />
            </section>
        </main>
        <Footer />

        {/* Back to Top Button */}
        {showButton && (
            <button
                onClick={scrollToTop}
                className="fixed bottom-8 right-8 bg-violet-600 text-white p-4 rounded-full shadow-2xl shadow-violet-500/20 hover:bg-violet-700 hover:-translate-y-1 transition-all duration-300 z-50"
                aria-label="Back to top"
            >
                <FaArrowUp className="text-xl" />
            </button>
        )}
    </div>
);
};

export default Portfolio;
