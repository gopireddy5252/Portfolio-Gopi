import { motion } from 'framer-motion';
import { FaGraduationCap, FaCertificate, FaCode, FaMapMarkerAlt } from 'react-icons/fa';
import { personalInfo, education } from '../data/portfolio';
import './About.css';

const About = () => {
    return (
        <section id="about" className="section about">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="section-title">About Me</h2>
                    <p className="section-subtitle">
                        Get to know more about my background and journey
                    </p>
                </motion.div>

                <div className="about-content">
                    <motion.div
                        className="about-text"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="about-intro">
                            <h3>Hello! I'm <span className="gradient-text">{personalInfo.name}</span></h3>
                            <p className="about-bio">
                                I'm a passionate <strong>Java Developer</strong> with over a year of hands-on experience
                                building enterprise-grade applications. Currently working at
                                <strong> I Base Software Solutions</strong>, I specialize in developing robust backend
                                systems for global insurance platforms.
                            </p>
                            <p className="about-bio">
                                My expertise lies in <strong>Spring Boot</strong>, <strong>REST APIs</strong>, and
                                <strong> database design</strong>. I've contributed to systems serving 15+ countries
                                and 50+ business clients, handling complex validation, policy management, and claims
                                processing workflows.
                            </p>
                            <p className="about-bio">
                                I'm driven by solving complex problems and building solutions that make a real impact.
                                When I'm not coding, I enjoy learning new technologies and contributing to the developer
                                community.
                            </p>
                        </div>

                        <div className="about-highlights">
                            <div className="highlight-item">
                                <FaCode className="highlight-icon" />
                                <div>
                                    <strong>1+ Year</strong>
                                    <span>Professional Experience</span>
                                </div>
                            </div>
                            <div className="highlight-item">
                                <FaMapMarkerAlt className="highlight-icon" />
                                <div>
                                    <strong>{personalInfo.location}</strong>
                                    <span>Current Location</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="about-cards"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <div className="about-card glass">
                            <div className="card-icon">
                                <FaGraduationCap />
                            </div>
                            <div className="card-content">
                                <h4>Education</h4>
                                <h5>{education.degree}</h5>
                                <p className="card-institution">{education.university}</p>
                                <div className="card-details">
                                    <span>{education.duration}</span>
                                    <span className="separator">•</span>
                                    <span>CGPA: {education.cgpa}</span>
                                </div>
                                <p className="card-location">
                                    <FaMapMarkerAlt /> {education.location}
                                </p>
                            </div>
                        </div>

                        <div className="about-card glass">
                            <div className="card-icon certification">
                                <FaCertificate />
                            </div>
                            <div className="card-content">
                                <h4>Certification</h4>
                                <h5>{education.certification}</h5>
                                <p className="card-description">
                                    Comprehensive training in full-stack Java development covering
                                    Spring Boot, Hibernate, REST APIs, and frontend technologies.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
