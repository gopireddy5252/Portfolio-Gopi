import { motion } from 'framer-motion';
import { FaBriefcase, FaMapMarkerAlt, FaCalendar, FaCheckCircle } from 'react-icons/fa';
import { experiences } from '../data/portfolio';
import './Experience.css';

const Experience = () => {
    return (
        <section id="experience" className="section experience">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="section-title">Work Experience</h2>
                    <p className="section-subtitle">
                        My professional journey and contributions
                    </p>
                </motion.div>

                <div className="experience-timeline">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={exp.id}
                            className="timeline-item"
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                        >
                            <div className="timeline-marker">
                                <div className="marker-dot">
                                    <FaBriefcase />
                                </div>
                                <div className="marker-line"></div>
                            </div>

                            <motion.div
                                className="timeline-content glass"
                                whileHover={{ scale: 1.02 }}
                                transition={{ type: 'spring', stiffness: 300 }}
                            >
                                <div className="exp-header">
                                    <div className="exp-title-section">
                                        <span className="exp-type">{exp.type}</span>
                                        <h3 className="exp-role">{exp.role}</h3>
                                        <h4 className="exp-company gradient-text">{exp.company}</h4>
                                    </div>
                                    <div className="exp-meta">
                                        <div className="meta-item">
                                            <FaCalendar />
                                            <span>{exp.duration}</span>
                                        </div>
                                        <div className="meta-item">
                                            <FaMapMarkerAlt />
                                            <span>{exp.location}</span>
                                        </div>
                                    </div>
                                </div>

                                <ul className="exp-responsibilities">
                                    {exp.responsibilities.map((responsibility, idx) => (
                                        <motion.li
                                            key={idx}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.3 + idx * 0.1 }}
                                        >
                                            <FaCheckCircle className="check-icon" />
                                            <span>{responsibility}</span>
                                        </motion.li>
                                    ))}
                                </ul>

                                <div className="exp-technologies">
                                    {exp.technologies.map((tech) => (
                                        <span key={tech} className="tag">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
