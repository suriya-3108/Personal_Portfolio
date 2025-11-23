import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Experience = () => {
    const experiences = [
        {
            role: 'Junior Software Engineer Intern',
            company: 'SkillRank',
            date: '2025',
            location: 'Remote',
            description: [
                'Worked on important backend tasks using Python, APIs, databases, and structured workflows.',
                'Implemented important frontend features with HTML, CSS, JavaScript, improving responsiveness and usability.',
                'Built important automation scripts using Python to simplify processes and enhance efficiency.',
                'Performed important debugging tasks analyzing errors, optimizing performance, and ensuring application functionality.',
                'Collaborated on important API integrations connecting frontend interfaces with backend data flow.'
            ],
            techStack: ['Python', 'React.js', 'Node.js', 'MongoDB', 'Lambda', 'Flask', 'Next.js', 'Tailwind CSS', 'Postman', 'Git']


        },
        {
            role: 'Web Development Intern',
            company: 'VaultofCodes',
            date: '2025',
            location: 'Remote',
            description: [
                'Developed important responsive webpages using HTML, CSS, JavaScript, ensuring clean design and usability.',
                'Implemented important frontend components, improving user interaction, layout structure, and overall performance.',
                'Worked on important backend logic using APIs, handling data flow and functional requirements.',
                'Fixed important UI bugs, optimized loading speed, and enhanced cross-browser compatibility features.',
                'Collaborated on important project modules, following Git workflows and modern web development practices.'
            ],
            techStack: ['HTML', 'CSS', 'JavaScript', 'Git', 'APIs']
        }


    ];

    return (
        <section id="experience" className="py-20 bg-primary text-text">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="flex items-center mb-12">
                        <h2 className="text-3xl font-bold text-text mr-4">Professional Experience</h2>
                        <div className="h-px bg-gray-700 flex-grow"></div>
                    </div>

                    <div className="relative border-l-2 border-gray-700 ml-3 md:ml-6 space-y-12">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="relative pl-8 md:pl-12"
                            >
                                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-accent border-4 border-primary"></div>

                                <div className="mb-2">
                                    <h3 className="text-2xl font-bold text-text">{exp.role}</h3>
                                    <h4 className="text-xl text-accent font-medium">{exp.company}</h4>
                                </div>

                                <div className="flex flex-wrap gap-4 text-sm text-muted mb-4 font-mono">
                                    <div className="flex items-center">
                                        <FaCalendarAlt className="mr-2" />
                                        {exp.date}
                                    </div>
                                    <div className="flex items-center">
                                        <FaMapMarkerAlt className="mr-2" />
                                        {exp.location}
                                    </div>
                                </div>

                                <ul className="list-disc list-outside ml-4 space-y-2 text-muted mb-6">
                                    {exp.description.map((item, i) => (
                                        <li key={i} className="leading-relaxed">
                                            {item}
                                        </li>
                                    ))}
                                </ul>

                                <div className="flex flex-wrap gap-2">
                                    {exp.techStack.map((tech, i) => (
                                        <span key={i} className="px-3 py-1 bg-secondary text-accent text-xs rounded-full font-mono">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Experience;
