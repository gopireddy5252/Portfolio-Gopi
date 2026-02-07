import { IconType } from 'react-icons';
import {
    FaJava, FaJs, FaDatabase, FaGitAlt, FaDocker
} from 'react-icons/fa';
import {
    SiSpringboot, SiHibernate, SiMongodb, SiMysql, SiOracle,
    SiPostman, SiIntellijidea, SiEclipseide, SiTypescript,
    SiHtml5, SiCss3, SiReact
} from 'react-icons/si';

export interface Skill {
    name: string;
    icon: IconType;
    category: 'language' | 'framework' | 'database' | 'tool';
    color: string;
}

export interface Experience {
    id: number;
    role: string;
    company: string;
    location: string;
    duration: string;
    type: 'full-time' | 'internship' | 'contract';
    responsibilities: string[];
    technologies: string[];
}

export interface Project {
    id: number;
    title: string;
    subtitle: string;
    description: string;
    highlights: string[];
    technologies: string[];
    type: 'enterprise' | 'personal' | 'academic';
    image?: string;
    github?: string;
    demo?: string;
}

export const personalInfo = {
    name: 'Bommanapalli Gopi',
    shortName: 'Gopi Reddy',
    title: 'Java Developer',
    tagline: 'Building Robust Enterprise Solutions',
    email: 'gopireddyb08@gmail.com',
    phone: '+91-9381703589',
    location: 'Hyderabad, India',
    hometown: 'Palamaner, Chittoor',
    linkedin: 'https://www.linkedin.com/in/bommanapalli-gopi-65a5a22b1/',
    github: 'https://github.com/gopireddy5252',
    bio: `Passionate Java Developer with 1+ year of experience in building enterprise-grade applications. 
        Specialized in Spring Boot, REST APIs, and insurance domain solutions. 
        Currently working on global B2B insurance platforms serving 15+ countries.`,
    resumeUrl: '/resume.pdf',
};

export const education = {
    degree: 'MCA - Master of Computer Application',
    university: 'SITAMS, Jntua University Anantapur',
    location: 'Chittoor, Andhra Pradesh',
    duration: '2021 – 2023',
    cgpa: '7.9',
    certification: 'Java Full Stack - Naresh IT',
};

export const skills: Skill[] = [
    // Languages
    { name: 'Java', icon: FaJava, category: 'language', color: '#f89820' },
    { name: 'JavaScript', icon: FaJs, category: 'language', color: '#f7df1e' },
    { name: 'TypeScript', icon: SiTypescript, category: 'language', color: '#3178c6' },
    { name: 'SQL', icon: FaDatabase, category: 'language', color: '#336791' },

    // Frameworks
    { name: 'Spring Boot', icon: SiSpringboot, category: 'framework', color: '#6db33f' },
    { name: 'Hibernate', icon: SiHibernate, category: 'framework', color: '#59666c' },
    { name: 'React', icon: SiReact, category: 'framework', color: '#61dafb' },
    { name: 'HTML5', icon: SiHtml5, category: 'framework', color: '#e34f26' },
    { name: 'CSS3', icon: SiCss3, category: 'framework', color: '#1572b6' },

    // Databases
    { name: 'Oracle', icon: SiOracle, category: 'database', color: '#f80000' },
    { name: 'MySQL', icon: SiMysql, category: 'database', color: '#4479a1' },
    { name: 'MongoDB', icon: SiMongodb, category: 'database', color: '#47a248' },

    // Tools
    { name: 'Git', icon: FaGitAlt, category: 'tool', color: '#f05032' },
    { name: 'Postman', icon: SiPostman, category: 'tool', color: '#ff6c37' },
    { name: 'IntelliJ', icon: SiIntellijidea, category: 'tool', color: '#000000' },
    { name: 'Eclipse', icon: SiEclipseide, category: 'tool', color: '#2c2255' },
    { name: 'Docker', icon: FaDocker, category: 'tool', color: '#2496ed' },
];

export const experiences: Experience[] = [
    {
        id: 1,
        role: 'Software Engineer',
        company: 'I Base Software Solutions India Pvt. Ltd.',
        location: 'Madapur, Hyderabad',
        duration: 'April 2025 - Present',
        type: 'full-time',
        responsibilities: [
            'Performed business client setup, including configuration of products, workflows, and country-specific policy rules',
            'Implemented bulk policy upload feature enabling automatic creation of multiple policies through file upload with complex validation and business rule implementation',
            'Developed business logic for policy creation, validation, and claims processing based on country-specific requirements',
            'Collaborated with cross-functional teams (QA, Business, Support) to deliver enhancements and bug fixes',
            'Resolved Production and UAT issues by analyzing application logs and implementing fixes',
            'Developed and tested REST APIs using Postman for request-response validation',
            'Used Git for version control including branching, merging, and code maintenance',
        ],
        technologies: ['Java', 'Spring Boot', 'REST APIs', 'Oracle', 'Git', 'Postman'],
    },
];

export const projects: Project[] = [
    {
        id: 1,
        title: 'Danni – Insurance Policy & Claims System',
        subtitle: 'QBE Insurance Group',
        description: 'Global B2B insurance platform enabling dealers and business partners to issue policies and process claims for multiple insurance products.',
        highlights: [
            'Supports 15+ countries and 50+ business clients with region-specific configurations',
            'Handles policy lifecycle: issuance, renewals, and claims processing',
            'Multiple product support: Warranty (MBI), GAP, SMART, Recovery, and MOT',
            'Direct dealer policy issuance and third-party reseller onboarding',
        ],
        technologies: ['Java', 'Spring Boot', 'Oracle', 'REST APIs', 'Hibernate'],
        type: 'enterprise',
    },
    {
        id: 2,
        title: 'Employee Management System',
        subtitle: 'Web Application',
        description: 'Full-featured web-based Employee Management System for efficient employee information management with modern UI and robust backend.',
        highlights: [
            'CRUD operations with dynamic search and pagination',
            'Soft deletion for data recovery and audit trails',
            'PRG (Post-Redirect-Get) pattern to prevent duplicate submissions',
            'Responsive UI with JSP, JSTL, and Bootstrap',
        ],
        technologies: ['Spring Boot', 'Spring MVC', 'JPA', 'MySQL', 'JSP', 'Bootstrap'],
        type: 'personal',
        github: 'https://github.com/gopireddyb08/employee-management',
    },
];

export const stats = [
    { label: 'Years Experience', value: '1+' },
    { label: 'Projects Delivered', value: '5+' },
    { label: 'APIs Developed', value: '20+' },
    { label: 'Technologies', value: '12+' },
];
