import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaPaperPlane } from 'react-icons/fa';
import { personalInfo } from '../data/portfolio';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Create mailto link
        const mailtoLink = `mailto:${personalInfo.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`From: ${formData.name} (${formData.email})\n\n${formData.message}`)}`;
        window.location.href = mailtoLink;
    };

    const contactInfo = [
        {
            icon: FaEnvelope,
            label: 'Email',
            value: personalInfo.email,
            link: `mailto:${personalInfo.email}`,
        },
        {
            icon: FaPhone,
            label: 'Phone',
            value: personalInfo.phone,
            link: `tel:${personalInfo.phone}`,
        },
        {
            icon: FaMapMarkerAlt,
            label: 'Location',
            value: personalInfo.location,
        },
    ];

    const socialLinks = [
        { icon: FaLinkedin, link: personalInfo.linkedin, label: 'LinkedIn' },
        { icon: FaGithub, link: personalInfo.github, label: 'GitHub' },
    ];

    return (
        <section id="contact" className="section contact">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="section-title">Get In Touch</h2>
                    <p className="section-subtitle">
                        Have a project in mind or want to discuss opportunities? Let's connect!
                    </p>
                </motion.div>

                <div className="contact-content">
                    <motion.div
                        className="contact-info"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h3>Let's work together</h3>
                        <p>
                            I'm always open to discussing new projects, creative ideas, or opportunities
                            to be part of your vision. Feel free to reach out through any of these channels.
                        </p>

                        <div className="contact-cards">
                            {contactInfo.map((info, index) => (
                                <motion.a
                                    key={info.label}
                                    href={info.link}
                                    className="contact-card glass"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ scale: 1.02 }}
                                >
                                    <div className="contact-icon">
                                        <info.icon />
                                    </div>
                                    <div className="contact-details">
                                        <span className="contact-label">{info.label}</span>
                                        <span className="contact-value">{info.value}</span>
                                    </div>
                                </motion.a>
                            ))}
                        </div>

                        <div className="social-links">
                            <span>Find me on</span>
                            <div className="social-icons">
                                {socialLinks.map((social) => (
                                    <motion.a
                                        key={social.label}
                                        href={social.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="social-icon"
                                        aria-label={social.label}
                                        whileHover={{ scale: 1.1, y: -3 }}
                                    >
                                        <social.icon />
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    <motion.form
                        className="contact-form glass"
                        onSubmit={handleSubmit}
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="name">Your Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="John Doe"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Your Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="john@example.com"
                                    required
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="subject">Subject</label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                placeholder="Project Discussion"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Tell me about your project..."
                                rows={5}
                                required
                            />
                        </div>

                        <motion.button
                            type="submit"
                            className="btn btn-primary submit-btn"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <FaPaperPlane /> Send Message
                        </motion.button>
                    </motion.form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
