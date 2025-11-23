import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import Project1 from '../assets/Project_1.webp';
import Project2 from '../assets/Project_2.jpg';
import Project3 from '../assets/project_3.png';

const Projects = () => {
    const projects = [
        {
            title: 'Personal AI-Chatbot',
            description: 'A custom AI chatbot built to answer queries intelligently, provide personalized assistance, and automate tasks using NLP models and dynamic conversation handling.',
            tags: ['React', 'Flask', 'MongoDB', 'JWT', 'Tailwind CSS'],
            github: 'https://github.com/suriya-3108/AI_Personal_Chatbot.git',
            demo: '#',
            image: Project1
        },
        {
            title: 'Movie Recommendation System',
            description: 'A movie recommendation app that suggests films based on user preferences, provides detailed information, and delivers an interactive, responsive experience with a clean UI.',
            tags: ['HTML', 'CSS', 'JavaScript', 'Flask', 'MongoDB'],
            github: 'https://github.com/suriya-3108/Movie_Recommender_System.git',
            demo: '#',
            image: Project2
        },
        {
            title: 'PDF Summarizer',
            description: 'An AI-powered PDF summarizer that extracts key points, generates concise summaries, and helps users quickly understand long documents with high accuracy.',
            tags: ['React', 'Firebase', 'Material UI'],
            github: '#',
            demo: '#',
            image: Project3
        },
    ];

    return (
        <section id="projects" className="py-20 bg-secondary text-text">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="max-w-6xl mx-auto"
                >
                    <div className="flex items-center mb-12">
                        <h2 className="text-3xl font-bold text-text mr-4">Some Things I've Built</h2>
                        <div className="h-px bg-gray-700 flex-grow"></div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-primary rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all group"
                            >
                                <div className="relative overflow-hidden h-48">
                                    <div className="absolute inset-0 bg-accent/20 group-hover:bg-transparent transition-colors z-10"></div>
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                    />
                                </div>

                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-text mb-2 group-hover:text-accent transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-muted mb-4 text-sm leading-relaxed">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.tags.map((tag) => (
                                            <span key={tag} className="text-xs font-mono text-accent">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex space-x-4">
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`transition-colors ${project.github === '#'
                                                    ? 'text-gray-600 cursor-not-allowed opacity-50'
                                                    : 'text-text hover:text-accent'
                                                }`}
                                            aria-label="GitHub Repo"
                                            onClick={(e) => {
                                                if (project.github === '#') {
                                                    e.preventDefault();
                                                }
                                            }}
                                        >
                                            <FaGithub size={20} />
                                        </a>
                                        <a
                                            href={project.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`transition-colors ${project.demo === '#'
                                                    ? 'text-gray-600 cursor-not-allowed opacity-50'
                                                    : 'text-text hover:text-accent'
                                                }`}
                                            aria-label="Live Demo"
                                            onClick={(e) => {
                                                if (project.demo === '#') {
                                                    e.preventDefault();
                                                }
                                            }}
                                        >
                                            <FaExternalLinkAlt size={18} />
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
