    import React from 'react';

    class GitHubErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.error('GitHub API Error:', error);
    }

    render() {
        if (this.state.hasError) {
        return (
            <section id="projects" className="section projects">
            <div className="container">
                <h2 className="section-title">
                <span className="highlight">🚀</span> My Projects
                </h2>
                <div className="github-error">
                <p>⚠️ Unable to fetch projects from GitHub at the moment.</p>
                <p>You can visit my GitHub profile directly to see all my repositories:</p>
                <a 
                    href="https://github.com/Swayam29082004" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn primary"
                >
                    Visit My GitHub Profile
                </a>
                
                {/* Static project list as fallback */}
                <div className="static-projects">
                    <h3>Some of my notable projects:</h3>
                    <ul>
                    <li><strong>Airbnb Clone</strong> - Full-stack travel listings web application</li>
                    <li><strong>MOVIE-BOOKING-SYSTEM</strong> - Hackathon project for movie ticket booking</li>
                    <li><strong>Bombay Hospital Chatbot</strong> - Medical diagnostic chatbot</li>
                    <li><strong>House Price Prediction</strong> - ML project with regression models</li>
                    <li><strong>Agri Value Chain System</strong> - Agriculture management platform</li>
                    <li><strong>GitHub Profile README Generator</strong> - Tool for creating profile READMEs</li>
                    </ul>
                </div>
                </div>
            </div>
            </section>
        );
        }

        return this.props.children;
    }
    }

    export default GitHubErrorBoundary;