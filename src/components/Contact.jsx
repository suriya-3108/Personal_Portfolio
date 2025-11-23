import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const formRef = useRef();
    const [isLoading, setIsLoading] = useState(false);
    const [status, setStatus] = useState({ type: '', message: '' });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setStatus({ type: '', message: '' });

        try {
            const result = await emailjs.sendForm(
                'service_yz4mzkp',      // Service ID
                'template_nd0li2a',     // Template ID
                formRef.current,
                'Nrir_vnz7gc7gI6MM'     // Public API Key
            );

            if (result.text === 'OK') {
                setStatus({
                    type: 'success',
                    message: 'Message sent successfully! I\'ll get back to you soon.'
                });
                formRef.current.reset();
            }
        } catch (error) {
            console.error('EmailJS Error:', error);
            setStatus({
                type: 'error',
                message: 'Failed to send message. Please try again or email me directly.'
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section id="contact" className="py-20 bg-primary text-text">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="max-w-6xl mx-auto"
                >
                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Contact Info */}
                        <div>
                            <p className="text-accent font-mono mb-4">Let's Connect</p>
                            <h2 className="text-4xl font-bold text-text mb-6">Get In Touch</h2>
                            <p className="text-muted text-lg mb-8 leading-relaxed">
                                Whether you have a project in mind, want to collaborate, or just want to say hello, I'd love to hear from you. I typically respond within 24 hours.
                            </p>

                            <div className="space-y-6 mb-8">
                                <div className="flex items-start space-x-4">
                                    <div className="bg-secondary p-3 rounded-full text-accent">
                                        <FaEnvelope size={20} />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-text">Email</h4>
                                        <a href="mailto:hsudhan422@gmail.com" className="text-muted hover:text-accent transition-colors">
                                            hsudhan422@gmail.com
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="bg-secondary p-3 rounded-full text-accent">
                                        <FaPhone size={20} />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-text">Phone</h4>
                                        <p className="text-muted">+91 6374057649</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="bg-secondary p-3 rounded-full text-accent">
                                        <FaMapMarkerAlt size={20} />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-text">Location</h4>
                                        <p className="text-muted">Karaikal, IN</p>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h4 className="text-lg font-bold text-text mb-4">Follow Me</h4>
                                <div className="flex space-x-4">
                                    <a href="https://github.com/suriya-3108" target="_blank" rel="noopener noreferrer" className="bg-secondary p-3 rounded-full text-text hover:text-accent hover:bg-secondary/80 transition-all">
                                        <FaGithub size={20} />
                                    </a>
                                    <a href="https://www.linkedin.com/in/suriya31-g" target="_blank" rel="noopener noreferrer" className="bg-secondary p-3 rounded-full text-text hover:text-accent hover:bg-secondary/80 transition-all">
                                        <FaLinkedin size={20} />
                                    </a>
                                    <a href="#" className="bg-secondary p-3 rounded-full text-text hover:text-accent hover:bg-secondary/80 transition-all">
                                        <FaTwitter size={20} />
                                    </a>
                                    <a href="#" className="bg-secondary p-3 rounded-full text-text hover:text-accent hover:bg-secondary/80 transition-all">
                                        <FaInstagram size={20} />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="bg-secondary p-8 rounded-lg shadow-lg">
                            <h3 className="text-2xl font-bold text-text mb-6">Send Message</h3>
                            <form ref={formRef} className="space-y-6" onSubmit={handleSubmit}>
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-muted mb-2">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        placeholder="Your Name"
                                        className="w-full bg-primary border border-gray-700 rounded-lg px-4 py-3 text-text focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-muted mb-2">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        placeholder="your.email@example.com"
                                        className="w-full bg-primary border border-gray-700 rounded-lg px-4 py-3 text-text focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium text-muted mb-2">Subject</label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        required
                                        placeholder="What's this about?"
                                        className="w-full bg-primary border border-gray-700 rounded-lg px-4 py-3 text-text focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-muted mb-2">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows="4"
                                        required
                                        placeholder="Tell me about your project or just say hello!"
                                        className="w-full bg-primary border border-gray-700 rounded-lg px-4 py-3 text-text focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors resize-none"
                                    ></textarea>
                                </div>

                                {/* Status Message */}
                                {status.message && (
                                    <div className={`p-4 rounded-lg ${status.type === 'success'
                                        ? 'bg-green-500/20 text-green-400 border border-green-500/50'
                                        : 'bg-red-500/20 text-red-400 border border-red-500/50'
                                        }`}>
                                        {status.message}
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className={`w-full bg-accent text-primary font-bold py-3 rounded-lg transition-colors ${isLoading
                                        ? 'opacity-50 cursor-not-allowed'
                                        : 'hover:bg-accent/90'
                                        }`}
                                >
                                    {isLoading ? 'Sending...' : 'Send Message'}
                                </button>
                            </form>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
