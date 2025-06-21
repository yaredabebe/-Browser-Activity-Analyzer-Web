import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import chromeExtension from "../assets/chrome-extension.jpg";
import edgeExtension from "../assets/edge-extension.jpg";
import dashboardPreview from "../assets/dashboard.PNG";
import dashboardPreview2 from "../assets/dashboard2.PNG";

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Take Control of Your <span className="highlight">Digital Habits</span></h1>
            <p className="subtitle">
              Browser Activity Analyzer helps you understand your browsing patterns
              and boost productivity with actionable insights
            </p>
            <div className="cta-buttons">
              <Link to="/pricing" className="cta-button primary">
                Get Started - It's Free
              </Link>
              <Link to="/features" className="cta-button secondary">
                <span className="icon">▶</span> See How It Works
              </Link>
            </div>
          </div>
          <div className="hero-image">
            <img src={dashboardPreview} alt="Dashboard Preview" />
          </div>
        </div>
      </section>

      {/* Trust  */}
      <section className="trust-badges">
        <div className="container">
          <p>Trusted by 1,00+ users worldwide</p>
          <div className="badges">
            <span>⭐ 4.5/5 Chrome Store</span>
            <span>⭐ 4.5/5 Edge Add-ons</span>
            <span>⭐ 2 Users from BMI company</span>
            <span>⭐ 4 Users from Google company</span>
            <span>⭐ Users from many company</span>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="about-section">
        <div className="container">
          {/* <h2><span className="section-number">01</span> Understand Your Digital Behavior</h2> */}
          <div className="section-header">
          <h2 className="section-title">
            <span className="section-number">01</span> Understand Your Digital Behavior
          </h2>
          {/* <p className="section-subtitle">
            Choose the plan that works best for you. 
          </p> */}
        </div>
          <div className="about-content">
            <div className="about-text">
              <p>
                Browser Activity Analyzer goes beyond simple time tracking. Our AI-powered 
                system categorizes your browsing activity to give you meaningful insights 
                about your digital habits.
              </p>
              <ul className="feature-list">
                <li><strong>Time Analysis:</strong> See exactly where your time goes</li>
                <li><strong>Productivity Score:</strong> Measure your daily efficiency</li>
                <li><strong>Focus Sessions:</strong> Track deep work periods</li>
                <li><strong>Goal Setting:</strong> Set and achieve browsing targets</li>
              </ul>
            </div>
            <div className="about-image">
              <img src={dashboardPreview2} alt="Analytics Dashboard" />
            </div>
          </div>
        </div>
      </section>

      {/* Extension */}
      <section className="extension-showcase">
        <div className="container">
          {/* <h2><span className="section-number">02</span> Available for Your Favorite Browser</h2> */}
          <div className="section-header">
          <h2 className="section-title">
            <span className="section-number">02</span> Available for Your Favorite Browser
          </h2>
          {/* <p className="section-subtitle">
            Choose the plan that works best for you. 
          </p> */}
        </div>

          <div className="extension-grid">
            <div className="extension-card chrome">
              <div className="browser-logo">🖥️</div>
              <img
                src={chromeExtension}
                alt="Chrome Extension"
                className="extension-screenshot"
              />
              <h3>Chrome Extension</h3>
              <p>
                Perfect for Chrome users with full support for all Chromium-based browsers.
              </p>
              <a href="#" className="download-button">
                Add to Chrome
              </a>
            </div>

            <div className="extension-card edge">
              <div className="browser-logo">🌐</div>
              <img
                src={edgeExtension}
                alt="Edge Extension"
                className="extension-screenshot"
              />
              <h3>Edge Extension</h3>
              <p>
                Optimized for Microsoft Edge with enhanced performance and integration.
              </p>
              <a href="#" className="download-button">
                Add to Edge
              </a>
            </div>
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

export default Home;