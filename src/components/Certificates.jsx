import React from 'react';
import { motion } from 'framer-motion';
import { FaAward, FaTrophy } from 'react-icons/fa';

const Certificates = () => {
    const [activeTab, setActiveTab] = React.useState('certificates');

    const certificates = [
        {
            title: 'Web Development Fundamentals',
            issuer: 'IBM - Skill Build',
            date: '2025',
            icon: <FaAward size={30} className="text-accent" />,
            description: 'Web design essentials with responsive layout techniques.'
        },
        {
            title: 'Python Beginner to Advanced',
            issuer: 'GeeksforGeeks',
            date: '2025',
            icon: <FaAward size={30} className="text-accent" />,
            description: 'Strong skills in Python logic and problem-solving techniques.'
        },
        {
            title: 'Naukri - Young Turks 2025',
            issuer: 'Naukri',
            date: '2025',
            icon: <FaTrophy size={30} className="text-yellow-400" />,
            description: 'Naukri Young Turks Exam 2025 — Scored 93.94 percentile.'
        },
        {
            title: 'Full Stack Web Development Bootcamp',
            issuer: 'Udemy',
            date: '2025',
            icon: <FaAward size={30} className="text-accent" />,
            description: 'Intensive bootcamp covering MERN stack development.'
        },
        {
            title: 'Javascript Basics to Advanced',
            issuer: 'GeeksforGeeks',
            date: '2025',
            icon: <FaAward size={30} className="text-accent" />,
            description: 'Comprehensive understanding of JavaScript core concepts and advanced features.'
        },
        {
            title: 'TCS - iON Young Professionals',
            issuer: 'TCS',
            date: '2025',
            icon: <FaTrophy size={30} className="text-yellow-400" />,
            description: 'Career readiness program focusing on professional skills and corporate etiquette.'
        }
    ];

    const education = [
        {
            title: 'Bachelor of Technology',
            institution: 'Perunthalaivar kamarajar Institute of Engineering and Technology',
            date: '2022 - 2026',
            icon: <FaAward size={30} className="text-accent" />,
            description: 'Information Technology. CGPA: 8.4'
        },
        {
            title: 'Higher Secondary Education',
            institution: 'Don Bosco Higher Secondary School',
            date: '2020 - 2022',
            icon: <FaAward size={30} className="text-accent" />,
            description: 'Specialized in Bio - Maths. - 83%'
        },
        {
            title: 'High School Education',
            institution: 'Vinith English High School',
            date: '2019 - 2020',
            icon: <FaAward size={30} className="text-accent" />,
            description: 'Completed with distinction. - 97.6%'
        }
    ];

    const data = activeTab === 'certificates' ? certificates : education;

    return (
        <section id="certificates" className="py-20 bg-secondary text-text">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="flex flex-col items-center mb-12">
                        <h2 className="text-3xl font-bold text-text text-center mb-8">
                            {activeTab === 'certificates' ? 'Certificates & Achievements' : 'Education'}
                        </h2>

                        <div className="flex space-x-4 bg-secondary p-1 rounded-full">
                            <button
                                onClick={() => setActiveTab('certificates')}
                                className={`px-6 py-2 rounded-full transition-all duration-300 ${activeTab === 'certificates'
                                    ? 'bg-accent text-primary font-bold shadow-lg'
                                    : 'text-muted hover:text-text'
                                    }`}
                            >
                                Certificates
                            </button>
                            <button
                                onClick={() => setActiveTab('education')}
                                className={`px-6 py-2 rounded-full transition-all duration-300 ${activeTab === 'education'
                                    ? 'bg-accent text-primary font-bold shadow-lg'
                                    : 'text-muted hover:text-text'
                                    }`}
                            >
                                Education
                            </button>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {data.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-secondary p-6 rounded-lg border border-gray-800 hover:border-accent/30 transition-colors flex items-start space-x-4"
                            >
                                <div className="mt-1 bg-primary p-3 rounded-full">
                                    {item.icon}
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-text mb-1">{item.title}</h3>
                                    <p className="text-accent text-sm mb-2">
                                        {activeTab === 'certificates' ? item.issuer : item.institution} | {item.date}
                                    </p>
                                    <p className="text-muted text-sm leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Certificates;
