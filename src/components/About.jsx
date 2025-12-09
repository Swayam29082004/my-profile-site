import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Cpu, Server } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: <Code2 />,
      title: 'Full Stack Development',
      description: 'Building scalable applications with MERN stack and modern frameworks'
    },
    {
      icon: <Database />,
      title: 'Data Science',
      description: 'Analyzing data and building ML models for insightful solutions'
    },
    {
      icon: <Cpu />,
      title: 'Electrical Engineering',
      description: 'Background in electrical systems and industrial automation'
    },
    {
      icon: <Server />,
      title: 'Backend Systems',
      description: 'Designing robust server architectures and APIs'
    }
  ];

  return (
    <section id="about" className="section about">
      <motion.div
        className="container"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">About Me</h2>
        
        <div className="about-content">
          <div className="about-text">
            <p>
              Ex-Backend Intern @ FyreGig | MERN Stack, Python, Java, DSA |
              B.E. CSE (Data Science), VCET '26
            </p>
            <p>
              I am a computer science student at Vidyavardhini's College of Engineering and Technology, 
              learning how to design, develop, and implement complex and innovative software systems 
              using programming, data structures, algorithms, and software engineering.
            </p>
            <p>
              With a background in electrical engineering, I combine technical expertise with 
              computer science education to become a proficient and versatile engineer who can 
              solve challenging and diverse problems in various domains.
            </p>
          </div>

          <div className="features-grid">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="feature-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="feature-icon">
                  {feature.icon}
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}