import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function LoadingScreen({ onLoaded }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            if (onLoaded) onLoaded();
          }, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(timer);
  }, [onLoaded]);

  return (
    <motion.div
      className="loading-screen"
      initial={{ opacity: 1 }}
      animate={{ opacity: progress >= 100 ? 0 : 1 }}
      transition={{ duration: 0.5 }}
      style={{ display: progress >= 100 ? 'none' : 'flex' }}
    >
      <div className="loading-container">
        <div className="spaceship-loader">
          <div className="spaceship">
            <div className="body"></div>
            <div className="wing wing-left"></div>
            <div className="wing wing-right"></div>
            <div className="engine"></div>
          </div>
        </div>
        
        <div className="loading-text">
          <h2>Launching Portfolio...</h2>
          <div className="progress-bar">
            <motion.div
              className="progress-fill"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
          <p>{progress}%</p>
        </div>
      </div>
    </motion.div>
  );
}