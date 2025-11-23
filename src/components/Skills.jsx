import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaPython } from 'react-icons/fa';
import { SiTailwindcss, SiTypescript, SiFlask, SiMongodb, SiMysql } from 'react-icons/si';

const Skills = () => {
    const skills = [
        { name: 'React', icon: <FaReact size={40} className="text-[#61DAFB]" /> },
        { name: 'JavaScript', icon: <FaJs size={40} className="text-[#F7DF1E]" /> },
        { name: 'TypeScript', icon: <SiTypescript size={40} className="text-[#3178C6]" /> },
        { name: 'Python', icon: <FaPython size={40} className="text-[#3776AB]" /> },
        { name: 'Flask', icon: <SiFlask size={40} className="text-[#000000]" /> },
        { name: 'MongoDB', icon: <SiMongodb size={40} className="text-[#47A248]" /> },
        { name: 'SQL', icon: <SiMysql size={40} className="text-[#4479A1]" /> },
        { name: 'HTML5', icon: <FaHtml5 size={40} className="text-[#E34F26]" /> },
        { name: 'CSS3', icon: <FaCss3Alt size={40} className="text-[#1572B6]" /> },
        { name: 'Tailwind', icon: <SiTailwindcss size={40} className="text-[#06B6D4]" /> },
        { name: 'Node.js', icon: <FaNodeJs size={40} className="text-[#339933]" /> },
        { name: 'Git', icon: <FaGitAlt size={40} className="text-[#F05032]" /> },
    ];

    return (
        <section id="skills" className="py-20 bg-primary text-text">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="flex items-center mb-12">
                        <div className="h-px bg-gray-700 flex-grow mr-4"></div>
                        <h2 className="text-3xl font-bold text-text">My Skills</h2>
                        <div className="h-px bg-gray-700 flex-grow ml-4"></div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {skills.map((skill, index) => (
                            <motion.div
                                key={skill.name}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -5 }}
                                className="bg-secondary p-6 rounded-lg shadow-lg flex flex-col items-center justify-center hover:shadow-xl transition-all border border-transparent hover:border-accent/20"
                            >
                                <div className="mb-4">{skill.icon}</div>
                                <h3 className="text-lg font-medium text-muted">{skill.name}</h3>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
