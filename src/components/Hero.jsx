import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

import { FaGithub, FaLinkedin, FaFileAlt } from 'react-icons/fa';
import ResumePDF from '../assets/Personal_resume.pdf';

const Hero = () => {
    return (
        <section
            id="hero"
            className="h-screen flex items-center justify-center bg-primary relative overflow-hidden"
        >
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-accent font-medium text-lg mb-4">Hi, My name is</h2>
                    <h1 className="text-5xl md:text-7xl font-bold text-text mb-6">
                        Suriyanarayanan G.
                    </h1>
                    <h2 className="text-2xl md:text-4xl font-bold text-muted mb-8">
                        Code with purpose. Build with passion.
                    </h2>
                    <p className="text-muted max-w-2xl mx-auto text-lg mb-10">
                        I'm a software engineer passionate about crafting
                        clean, meaningful digital experiences and building
                        products that truly serve and support users.
                    </p>

                    <div className="flex justify-center space-x-6 mb-10">
                        <a href="https://github.com/suriya-3108" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-accent transition-colors">
                            <FaGithub size={30} />
                        </a>
                        <a href="https://www.linkedin.com/in/suriya31-g" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-accent transition-colors">
                            <FaLinkedin size={30} />
                        </a>
                        <a href={ResumePDF} download="Suriyanarayanan_Resume.pdf" className="text-muted hover:text-accent transition-colors">
                            <FaFileAlt size={30} />
                        </a>
                    </div>

                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Link
                            to="projects"
                            smooth={true}
                            duration={500}
                            className="px-8 py-4 border-2 border-accent text-accent rounded hover:bg-accent/10 transition-colors cursor-pointer font-medium text-lg"
                        >
                            Check out my work!
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
