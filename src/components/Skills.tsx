import { motion } from 'framer-motion';
import { skills } from '../data/portfolio';
import './Skills.css';

const Skills = () => {
    const categories = [
        { key: 'language', title: 'Languages', description: 'Core programming languages I work with' },
        { key: 'framework', title: 'Frameworks & Libraries', description: 'Technologies that power my applications' },
        { key: 'database', title: 'Databases', description: 'Data storage solutions I use' },
        { key: 'tool', title: 'Tools & Platforms', description: 'Development and deployment tools' },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <section id="skills" className="section skills">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="section-title">Technical Skills</h2>
                    <p className="section-subtitle">
                        Technologies and tools I use to bring ideas to life
                    </p>
                </motion.div>

                <div className="skills-grid">
                    {categories.map((category, categoryIndex) => (
                        <motion.div
                            key={category.key}
                            className="skill-category glass"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                        >
                            <div className="category-header">
                                <h3>{category.title}</h3>
                                <p>{category.description}</p>
                            </div>

                            <motion.div
                                className="skill-items"
                                variants={containerVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                            >
                                {skills
                                    .filter((skill) => skill.category === category.key)
                                    .map((skill) => (
                                        <motion.div
                                            key={skill.name}
                                            className="skill-item"
                                            variants={itemVariants}
                                            whileHover={{ scale: 1.05, y: -3 }}
                                        >
                                            <div
                                                className="skill-icon"
                                                style={{
                                                    background: `${skill.color}15`,
                                                    color: skill.color
                                                }}
                                            >
                                                <skill.icon />
                                            </div>
                                            <span className="skill-name">{skill.name}</span>
                                        </motion.div>
                                    ))}
                            </motion.div>
                        </motion.div>
                    ))}
                </div>

                {/* Floating Tech Icons Background */}
                <div className="skills-bg-icons">
                    {skills.slice(0, 6).map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            className="floating-icon"
                            style={{
                                color: skill.color,
                                left: `${10 + (index * 15)}%`,
                                top: `${20 + (index % 3) * 30}%`,
                                animationDelay: `${index * 0.5}s`,
                            }}
                            initial={{ opacity: 0.1 }}
                            animate={{ opacity: 0.1 }}
                        >
                            <skill.icon />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
