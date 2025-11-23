import React from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaFilePdf } from 'react-icons/fa';
import ResumePDF from '../assets/Personal_resume.pdf';

const Resume = () => {
    return (
        <section id="resume" className="py-16 bg-primary text-text border-y border-gray-800">
            <div className="container mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto"
                >
                    <div className="mb-6 inline-block p-4 bg-primary rounded-full text-accent">
                        <FaFilePdf size={40} />
                    </div>
                    <h2 className="text-3xl font-bold text-text mb-4">Interested in my full background?</h2>
                    <p className="text-muted text-lg mb-8 max-w-2xl mx-auto">
                        Download my resume to get a detailed overview of my experience, education, and technical skills.
                    </p>

                    <motion.a
                        href={ResumePDF}
                        download="Suriyanarayanan_Resume.pdf"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center space-x-2 px-8 py-4 bg-accent text-primary font-bold rounded hover:bg-accent/90 transition-colors cursor-pointer"
                    >
                        <FaDownload />
                        <span>Download Resume</span>
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
};

export default Resume;
