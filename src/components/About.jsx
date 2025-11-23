import React from 'react';
import { motion } from 'framer-motion';
import PersonalPhoto from '../assets/Personal_photo.jpg';

const About = () => {
    return (
        <section id="about" className="py-20 bg-secondary text-text">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="flex items-center mb-8">
                        <h2 className="text-3xl font-bold text-text mr-4">About Me</h2>
                        <div className="h-px bg-gray-700 flex-grow"></div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-10">
                        <div>
                            <p className="text-muted mb-4 leading-relaxed">
                                I’m Suriyanarayanan, a junior Software Engineer with a strong focus on building practical and user-friendly applications. I enjoy turning ideas into real projects—whether it’s developing backend APIs, designing interactive frontends, or integrating systems to solve real problems. I’ve worked on applications like movie recommendation systems, property management tools, and PDF automation workflows, which helped me strengthen my skills in Python, Flask, JavaScript, and modern web development.
                            </p>
                            <p className="text-muted mb-4 leading-relaxed">
                                I love learning new technologies, improving my problem-solving skills, and building projects that make everyday tasks easier. I’m always exploring better ways to design clean, efficient systems and enjoy taking on challenges that help me grow as a developer. My goal is to contribute to meaningful software solutions while continuously improving my technical and creative abilities.
                            </p>
                        </div>
                        <div className="relative group">
                            <div className="absolute top-4 left-4 w-full h-full border-2 border-accent rounded transition-transform group-hover:top-2 group-hover:left-2"></div>
                            <div className="relative z-10 bg-muted rounded overflow-hidden aspect-square">
                                <img
                                    src={PersonalPhoto}
                                    alt="Suriyanarayanan G"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
