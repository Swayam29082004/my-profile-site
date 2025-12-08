import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Palette, Rocket } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: <Code2 />,
      title: 'Clean Code',
      description: 'Writing maintainable and scalable code following best practices'
    },
    {
      icon: <Palette />,
      title: 'Creative Design',
      description: 'Creating visually stunning and user-friendly interfaces'
    },
    {
      icon: <Rocket />,
      title: 'Fast Performance',
      description: 'Optimized applications for maximum speed and efficiency'
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
              Passionate developer with 5+ years of experience creating 
              interactive web experiences. Specialized in React, Three.js, 
              and modern frontend technologies.
            </p>
            <p>
              I bridge the gap between stunning visuals and technical 
              excellence, bringing ideas to life through code and creativity.
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