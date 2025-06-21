import React from 'react';
import { Link } from 'react-router-dom';
import './Features.css';
import { FiBarChart2, FiClock, FiBell, FiCalendar, FiLock, FiRefreshCw } from 'react-icons/fi';

const Features = () => {
  const features = [
    {
      icon: <FiBarChart2 className="feature-svg-icon" />,
      title: 'Detailed Analytics',
      description: 'Beautiful visualizations showing your browsing patterns, trends, and comparisons.'
    },
    {
     icon: <FiClock className="feature-svg-icon" />,
      title: 'Time Tracking',
      description: 'Precise tracking down to the minute with automatic categorization.'
    },
    {
      icon: <FiBell className="feature-svg-icon" />,
      title: 'Smart Alerts',
      description: 'Custom notifications when you exceed time limits on distracting sites.'
    },
    {
      icon: <FiCalendar className="feature-svg-icon" />,
      title: 'Daily Reports',
      description: 'Morning summaries and weekly reports delivered to your inbox.'
    },
    {
      icon: <FiLock className="feature-svg-icon" />,
      title: 'Privacy Focused',
      description: 'All data stays on your device. No cloud storage required.'
    },
    {
      icon: <FiRefreshCw className="feature-svg-icon" />,
      title: 'Cross-Device Sync',
      description: 'Optional sync between all your browsers and devices.'
    }
  ];

  return (
    <div className="features-page">
      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <h2 className="section-title">
            <span className="section-number">03</span> Powerful Features
          </h2>
          
          <div className="features-grid">
            {features.map((feature, index) => (
              <div className="feature-card" key={index}>
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="features-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Transform Your Digital Habits?</h2>
            <p>Join thousands of users who have already taken control of their online time</p>
            <div className="cta-buttons">
              <Link to="/pricing" className="cta-button primary">
                Get Started
              </Link>
              <Link to="/demo" className="cta-button secondary" style={{color:'white'}}>
                <span className="icon" style={{color:'white'}}>▶</span>  See Demo
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;