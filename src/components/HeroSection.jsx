import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Download, Rocket } from 'lucide-react';

export default function HeroSection({ setLoading }) {
  const [textIndex, setTextIndex] = useState(0);
  const roles = ['MERN Stack Developer', 'Python Programmer', 'Backend Engineer', 'Problem Solver'];

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <section id="hero" className="section hero">
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="astronaut-avatar"
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: 'reverse'
          }}
        >
          <div className="astronaut-helmet">
            <div className="visor"></div>
          </div>
          <div className="astronaut-body"></div>
        </motion.div>

        <div className="hero-text">
          <motion.h1
            className="title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <span className="gradient-text">🚀 SWAYAM CHAUDHARY</span>
          </motion.h1>
          
          <motion.div
            className="role-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <h2 className="role">
              {roles[textIndex]}
            </h2>
            <div className="role-indicator">
              <Rocket size={20} />
            </div>
          </motion.div>

          <motion.p
            className="description"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            Ex-Backend Intern @ FyreGig | MERN Stack, Python, Java, DSA
            <br />
            B.E. CSE (Data Science), VCET '26
          </motion.p>

          <motion.div
            className="buttons"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
          >
            <motion.a
              href="#contact"
              className="btn primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail size={18} /> Contact Me
            </motion.a>
            <motion.a
              href="#"
              className="btn secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download size={18} /> Download CV
            </motion.a>
          </motion.div>

          <motion.div
            className="social-links"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 }}
          >
            <motion.a
              href="https://www.linkedin.com/in/swayam-chaudhary"
              className="social-icon"
              whileHover={{ y: -5, scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              aria-label="LinkedIn"
            >
              <Linkedin />
            </motion.a>
            <motion.a
              href="https://github.com"
              className="social-icon"
              whileHover={{ y: -5, scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              aria-label="GitHub"
            >
              <Github />
            </motion.a>
            <motion.a
              href="mailto:swayamchaudhari123@gmail.com"
              className="social-icon"
              whileHover={{ y: -5, scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Email"
            >
              <Mail />
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}