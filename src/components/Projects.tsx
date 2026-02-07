import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub, FaBuilding, FaLaptopCode, FaGraduationCap } from 'react-icons/fa';
import { projects } from '../data/portfolio';
import './Projects.css';

const projectTypeIcons = {
    enterprise: FaBuilding,
    personal: FaLaptopCode,
    academic: FaGraduationCap,
};

const Projects = () => {
    return (
        <section id="projects" className="section projects">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="section-title">Featured Projects</h2>
                    <p className="section-subtitle">
                        Showcasing my work and contributions to real-world applications
                    </p>
                </motion.div>

                <div className="projects-grid">
                    {projects.map((project, index) => {
                        const TypeIcon = projectTypeIcons[project.type];
                        return (
                            <motion.div
                                key={project.id}
                                className="project-card glass"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -8 }}
                            >
                                <div className="project-header">
                                    <div className="project-icon">
                                        <TypeIcon />
                                    </div>
                                    <span className={`project-type ${project.type}`}>
                                        {project.type.charAt(0).toUpperCase() + project.type.slice(1)}
                                    </span>
                                </div>

                                <div className="project-content">
                                    <h3 className="project-title">{project.title}</h3>
                                    <p className="project-subtitle">{project.subtitle}</p>
                                    <p className="project-description">{project.description}</p>

                                    <ul className="project-highlights">
                                        {project.highlights.map((highlight, idx) => (
                                            <li key={idx}>
                                                <span className="highlight-bullet">▹</span>
                                                {highlight}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="project-footer">
                                    <div className="project-tech">
                                        {project.technologies.map((tech) => (
                                            <span key={tech} className="tech-tag">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="project-links">
                                        {project.github && (
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="project-link"
                                                aria-label="View GitHub Repository"
                                            >
                                                <FaGithub />
                                            </a>
                                        )}
                                        {project.demo && (
                                            <a
                                                href={project.demo}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="project-link"
                                                aria-label="View Live Demo"
                                            >
                                                <FaExternalLinkAlt />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Projects;
