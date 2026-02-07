import { FaGithub, FaLinkedin, FaEnvelope, FaHeart, FaCode } from 'react-icons/fa';
import { personalInfo } from '../data/portfolio';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <a href="#home" className="footer-logo">
                            <span className="logo-name">Gopi Reddy</span>
                        </a>
                        <p className="footer-tagline">
                            Building robust enterprise solutions with passion
                        </p>
                    </div>

                    <div className="footer-links">
                        <a href="#about">About</a>
                        <a href="#skills">Skills</a>
                        <a href="#experience">Experience</a>
                        <a href="#projects">Projects</a>
                        <a href="#contact">Contact</a>
                    </div>

                    <div className="footer-socials">
                        <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                            <FaGithub />
                        </a>
                        <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                            <FaLinkedin />
                        </a>
                        <a href={`mailto:${personalInfo.email}`} aria-label="Email">
                            <FaEnvelope />
                        </a>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p className="copyright">
                        © {currentYear} {personalInfo.shortName}. All rights reserved.
                    </p>
                    <p className="made-with">
                        Made with <FaHeart className="heart-icon" /> and <FaCode className="code-icon" />
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
