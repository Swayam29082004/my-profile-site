import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Briefcase } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      company: 'FyreGig',
      role: 'Backend Intern',
      period: 'Previous Internship',
      location: 'Remote',
      description: 'Worked on backend development using MERN stack, implemented REST APIs, and contributed to database design and optimization.',
      technologies: ['Node.js', 'Express', 'MongoDB', 'Redis']
    },
    {
      company: 'Arrow Electricals India Pvt. Ltd.',
      role: 'Student Intern',
      period: 'Aug 2022 - Dec 2022 (5 months)',
      location: 'Mumbai, Maharashtra, India',
      description: 'Applied Python, leadership, and management skills to various projects involving electrical and software systems. Supported design, development, and testing of innovative solutions for clients in automotive, aerospace, and healthcare industries.',
      technologies: ['Python', 'AutoCAD', 'SCADA', 'IoT', 'Electrical Systems']
    }
  ];

  return (
    <section className="section experience">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="highlight">💼</span> Experience
        </motion.h2>
        
        <div className="timeline">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="timeline-item"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="timeline-marker">
                <Briefcase />
              </div>
              
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3>{exp.role}</h3>
                  <h4>{exp.company}</h4>
                </div>
                
                <div className="timeline-meta">
                  <span className="meta-item">
                    <Calendar size={14} />
                    {exp.period}
                  </span>
                  <span className="meta-item">
                    <MapPin size={14} />
                    {exp.location}
                  </span>
                </div>
                
                <p className="timeline-description">{exp.description}</p>
                
                <div className="technologies">
                  {exp.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}