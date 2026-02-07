import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload, FaMapMarkerAlt } from 'react-icons/fa';
import { personalInfo, stats } from '../data/portfolio';
import './Hero.css';

const Hero = () => {
    const roles = ['Java Developer', 'Backend Engineer', 'Spring Boot Expert', 'API Developer'];

    return (
        <section id="home" className="hero">
            <div className="hero-bg-elements">
                <div className="hero-orb hero-orb-1"></div>
                <div className="hero-orb hero-orb-2"></div>
                <div className="hero-grid"></div>
            </div>

            <div className="container hero-container">
                <motion.div
                    className="hero-content"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <motion.div
                        className="hero-badge"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        <span className="badge-dot"></span>
                        Available for opportunities
                    </motion.div>

                    <motion.h1
                        className="hero-title"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        Hi, I'm <span className="gradient-text">{personalInfo.shortName}</span>
                    </motion.h1>

                    <motion.div
                        className="hero-roles"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        <TypewriterText texts={roles} />
                    </motion.div>

                    <motion.p
                        className="hero-description"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                    >
                        {personalInfo.tagline}. Building robust enterprise solutions with
                        <span className="highlight"> Java</span>,
                        <span className="highlight"> Spring Boot</span>, and
                        <span className="highlight"> REST APIs</span>.
                    </motion.p>

                    <motion.div
                        className="hero-location"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.55 }}
                    >
                        <FaMapMarkerAlt />
                        <span>{personalInfo.location}</span>
                    </motion.div>

                    <motion.div
                        className="hero-actions"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                    >
                        <a href="#contact" className="btn btn-primary">
                            <FaEnvelope /> Get in Touch
                        </a>
                        <a href={personalInfo.resumeUrl} className="btn btn-secondary">
                            <FaDownload /> Resume
                        </a>
                    </motion.div>

                    <motion.div
                        className="hero-socials"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.7 }}
                    >
                        <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub">
                            <FaGithub />
                        </a>
                        <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
                            <FaLinkedin />
                        </a>
                        <a href={`mailto:${personalInfo.email}`} className="social-link" aria-label="Email">
                            <FaEnvelope />
                        </a>
                    </motion.div>
                </motion.div>

                <motion.div
                    className="hero-stats"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                >
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            className="stat-card glass"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.9 + index * 0.1 }}
                            whileHover={{ scale: 1.05 }}
                        >
                            <span className="stat-value gradient-text">{stat.value}</span>
                            <span className="stat-label">{stat.label}</span>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            <motion.div
                className="scroll-indicator"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
            >
                <div className="scroll-mouse">
                    <div className="scroll-wheel"></div>
                </div>
                <span>Scroll Down</span>
            </motion.div>
        </section>
    );
};

// Typewriter Component
const TypewriterText = ({ texts }: { texts: string[] }) => {
    const [displayText, setDisplayText] = React.useState('');
    const [textIndex, setTextIndex] = React.useState(0);
    const [isDeleting, setIsDeleting] = React.useState(false);

    React.useEffect(() => {
        const currentText = texts[textIndex];
        const timeout = setTimeout(() => {
            if (!isDeleting) {
                if (displayText.length < currentText.length) {
                    setDisplayText(currentText.slice(0, displayText.length + 1));
                } else {
                    setTimeout(() => setIsDeleting(true), 2000);
                }
            } else {
                if (displayText.length > 0) {
                    setDisplayText(displayText.slice(0, -1));
                } else {
                    setIsDeleting(false);
                    setTextIndex((prev) => (prev + 1) % texts.length);
                }
            }
        }, isDeleting ? 50 : 100);

        return () => clearTimeout(timeout);
    }, [displayText, isDeleting, textIndex, texts]);

    return (
        <span className="typewriter">
            {displayText}
            <span className="cursor">|</span>
        </span>
    );
};

import React from 'react';

export default Hero;
