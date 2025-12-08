import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Server, Cpu, GitBranch, Layers } from 'lucide-react';

export default function Skills() {
  const skills = [
    { name: 'Python', level: 95, color: '#3776AB', icon: <Code2 /> },
    { name: 'MERN Stack', level: 90, color: '#61DAFB', icon: <Layers /> },
    { name: 'JavaScript', level: 88, color: '#F7DF1E', icon: <Code2 /> },
    { name: 'Java', level: 85, color: '#007396', icon: <Cpu /> },
    { name: 'DSA', level: 92, color: '#FF6B6B', icon: <GitBranch /> },
    { name: 'MongoDB', level: 87, color: '#47A248', icon: <Database /> },
    { name: 'Express.js', level: 86, color: '#000000', icon: <Server /> },
    { name: 'React', level: 91, color: '#61DAFB', icon: <Code2 /> },
    { name: 'Node.js', level: 89, color: '#339933', icon: <Server /> },
    { name: 'AutoCAD', level: 78, color: '#A91C22', icon: <Layers /> },
    { name: 'SCADA', level: 75, color: '#1E90FF', icon: <Cpu /> },
    { name: 'Electrical Systems', level: 82, color: '#FFA500', icon: <Cpu /> }
  ];

  const certifications = [
    'A Quick Start Guide to Programming in Python',
    'Level Up: Python',
    'Certificate of Completion - Swayam Chaudhary'
  ];

  return (
    <section className="section skills">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="highlight">🚀</span> Skills & Certifications
        </motion.h2>
        
        <div className="skills-content">
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="skill-card"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -5 }}
              >
                <div className="skill-icon" style={{ color: skill.color }}>
                  {skill.icon}
                </div>
                <div className="skill-info">
                  <h3>{skill.name}</h3>
                  <div className="skill-bar">
                    <motion.div
                      className="skill-level"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      style={{ backgroundColor: skill.color }}
                    />
                  </div>
                  <span className="skill-percent">{skill.level}%</span>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="certifications"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3>Certifications</h3>
            <div className="cert-list">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  className="cert-item"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="cert-badge">✓</div>
                  <span>{cert}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}