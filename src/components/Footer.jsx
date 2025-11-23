import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-primary py-8 text-center text-muted text-sm">
            <div className="container mx-auto px-4">
                <div className="flex justify-center space-x-6 mb-4">
                    <a href="https://github.com/suriya-3108" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors"><FaGithub size={20} /></a>
                    <a href="https://www.linkedin.com/in/suriya31-g" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors"><FaLinkedin size={20} /></a>
                    <a href="#" className="hover:text-accent transition-colors"><FaTwitter size={20} /></a>
                    <a href="#" className="hover:text-accent transition-colors"><FaInstagram size={20} /></a>
                </div>
                <p>
                    Designed & Built by Suriyanarayanan G
                </p>
            </div>
        </footer>
    );
};

export default Footer;
