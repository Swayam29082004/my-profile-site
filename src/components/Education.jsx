import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Award } from 'lucide-react';

export default function Education() {
  const education = [
    {
      institution: 'Vidyavardhini\'s College of Engineering and Technology',
      degree: 'Bachelor of Engineering, Computer Science (Data Science)',
      period: 'September 2023 - June 2026',
      description: 'Currently pursuing B.E. in Computer Science with specialization in Data Science. Learning advanced programming, algorithms, and machine learning concepts.',
      highlights: ['Data Structures & Algorithms', 'Machine Learning', 'Software Engineering', 'Database Management']
    },
    {
      institution: 'SVKM\'s Shri Bhagubhai Mafatlal Polytechnic and College of Engineering',
      degree: 'Diploma in Electrical Engineering Technologies',
      period: 'January 2020 - June 2023',
      description: 'Gained knowledge and skills in electrical circuits, machines, power systems, and control systems. Developed strong foundation in engineering principles.',
      highlights: ['Electrical Circuits', 'Power Systems', 'Control Systems', 'Industrial Automation']
    }
  ];

  return (
    <section className="section education">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="highlight">🎓</span> Education
        </motion.h2>
        
        <div className="education-grid">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              className="education-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10 }}
            >
              <div className="education-header">
                <div className="education-icon">
                  <GraduationCap />
                </div>
                <div>
                  <h3>{edu.institution}</h3>
                  <h4>{edu.degree}</h4>
                </div>
              </div>
              
              <div className="education-period">
                <Calendar size={16} />
                <span>{edu.period}</span>
              </div>
              
              <p className="education-description">{edu.description}</p>
              
              <div className="education-highlights">
                {edu.highlights.map((highlight, hIndex) => (
                  <div key={hIndex} className="highlight-item">
                    <Award size={14} />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}