import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Star, GitFork, Code } from 'lucide-react';

export default function Projects() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    fetchGitHubRepos();
  }, []);

  const fetchGitHubRepos = async () => {
    try {
      const response = await fetch('https://api.github.com/users/Swayam29082004/repos?sort=updated&per_page=50');
      const data = await response.json();
      setRepos(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching GitHub repos:', error);
      setLoading(false);
    }
  };

  const featuredRepos = [
    'Airbnb',
    'MOVIE-BOOKING-SYSTEM',
    'house-price-prediction-master',
    'Bombay-hospital-chatbot',
    'Strengthening-Agri-Value-Chain-Linkages-User-and-Dealer-Profile-Management-System-',
    'my-profile-site',
    'github-profile-readme-generator',
    'travel-website'
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Development' },
    { id: 'ml', label: 'ML/AI' },
    { id: 'fullstack', label: 'Full Stack' }
  ];

  const getCategory = (repoName, description) => {
    const desc = description?.toLowerCase() || '';
    const name = repoName.toLowerCase();

    if (
      name.includes('movie') || 
      name.includes('booking') || 
      name.includes('travel') || 
      name.includes('airbnb') ||
      name.includes('agri') ||
      desc.includes('full-stack') ||
      desc.includes('mern') ||
      desc.includes('node') ||
      desc.includes('express')
    ) {
      return 'fullstack';
    } else if (
      name.includes('chatbot') || 
      name.includes('ml') || 
      name.includes('ai') || 
      name.includes('prediction') ||
      desc.includes('machine learning') ||
      desc.includes('data science')
    ) {
      return 'ml';
    } else {
      return 'web';
    }
  };

  const filteredRepos = repos.filter(repo => {
    if (filter === 'all') return true;
    return getCategory(repo.name, repo.description) === filter;
  });

  const getRepoIcon = (repoName) => {
    if (repoName.includes('chatbot')) return '🤖';
    if (repoName.includes('movie') || repoName.includes('booking')) return '🎬';
    if (repoName.includes('airbnb') || repoName.includes('travel')) return '🏠';
    if (repoName.includes('prediction')) return '📈';
    if (repoName.includes('agri')) return '🌾';
    if (repoName.includes('profile')) return '👤';
    return '💻';
  };

  const formatDescription = (desc) => {
    if (!desc) return 'No description available';
    return desc.length > 120 ? desc.substring(0, 120) + '...' : desc;
  };

  if (loading) {
    return (
      <section id="projects" className="section projects">
        <div className="container">
          <h2 className="section-title">
            <span className="highlight">🚀</span> My Projects
          </h2>
          <div className="loading-projects">
            <div className="spinner"></div>
            <p>Loading projects from GitHub...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="highlight">🚀</span> My Projects
        </motion.h2>

        <p className="projects-intro">
          Check out my work on GitHub! I've built various projects ranging from full-stack web applications 
          to machine learning models and data analysis tools.
        </p>

        {/* Category Filters */}
        <div className="category-filters">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`filter-btn ${filter === category.id ? 'active' : ''}`}
              onClick={() => setFilter(category.id)}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredRepos.map((repo, index) => (
            <motion.div
              key={repo.id}
              className="project-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -10 }}
            >
              <div className="project-header">
                <div className="project-icon">
                  {getRepoIcon(repo.name)}
                </div>
                <div className="project-title">
                  <h3>{repo.name}</h3>
                  <span className={`project-tag ${getCategory(repo.name, repo.description)}`}>
                    {getCategory(repo.name, repo.description).toUpperCase()}
                  </span>
                </div>
              </div>

              <p className="project-description">
                {formatDescription(repo.description)}
              </p>

              <div className="project-tech">
                {repo.language && (
                  <span className="tech-tag">
                    <Code size={12} /> {repo.language}
                  </span>
                )}
                {featuredRepos.includes(repo.name) && (
                  <span className="featured-tag">⭐ Featured</span>
                )}
              </div>

              <div className="project-stats">
                <div className="stat">
                  <Star size={14} />
                  <span>{repo.stargazers_count}</span>
                </div>
                <div className="stat">
                  <GitFork size={14} />
                  <span>{repo.forks_count}</span>
                </div>
                <div className="stat">
                  <span className="update-date">
                    Updated: {new Date(repo.updated_at).toLocaleDateString()}
                  </span>
                </div>
              </div>

              <div className="project-links">
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  <Github size={16} />
                  <span>View Code</span>
                </a>
                {repo.homepage && (
                  <a
                    href={repo.homepage}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <ExternalLink size={16} />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub Stats */}
        <motion.div
          className="github-stats"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="stats-card">
            <h3>GitHub Overview</h3>
            <div className="stats-grid">
              <div className="stat-item">
                <Github size={24} />
                <div>
                  <h4>Total Repositories</h4>
                  <p>{repos.length}+</p>
                </div>
              </div>
              <div className="stat-item">
                <Star size={24} />
                <div>
                  <h4>Total Stars</h4>
                  <p>{repos.reduce((acc, repo) => acc + repo.stargazers_count, 0)}+</p>
                </div>
              </div>
              <div className="stat-item">
                <GitFork size={24} />
                <div>
                  <h4>Total Forks</h4>
                  <p>{repos.reduce((acc, repo) => acc + repo.forks_count, 0)}+</p>
                </div>
              </div>
            </div>
            <a
              href="https://github.com/Swayam29082004"
              target="_blank"
              rel="noopener noreferrer"
              className="github-profile-btn"
            >
              <Github size={18} />
              Visit My GitHub Profile
            </a>
          </div>
        </motion.div>

        {/* Featured Projects Description */}
        <motion.div
          className="featured-projects"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3>🌟 Featured Projects</h3>
          <div className="featured-list">
            <div className="featured-item">
              <h4>Airbnb Clone (Wonderlust)</h4>
              <p>Full-stack travel listings web application with user authentication, reviews, and CRUD operations</p>
            </div>
            <div className="featured-item">
              <h4>MOVIE-BOOKING-SYSTEM</h4>
              <p>National-level hackathon project - Full-stack movie ticket booking system with real-world challenges</p>
            </div>
            <div className="featured-item">
              <h4>Bombay Hospital Chatbot</h4>
              <p>Flask-based medical diagnostic chatbot with symptom analysis and doctor recommendations</p>
            </div>
            <div className="featured-item">
              <h4>House Price Prediction</h4>
              <p>ML project comparing Linear Regression and Gradient Boosting for real estate predictions</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}