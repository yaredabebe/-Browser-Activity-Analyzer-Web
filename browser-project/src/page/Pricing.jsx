import React from 'react';
import { Link } from 'react-router-dom';
import { FiCheck, FiZap, FiStar } from 'react-icons/fi';
import './Pricing.css';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51RaxPs4anPSdQJxRklHSyL0Kj5k3yoQ30owVXm6XdsGUb4ZVA85JZBUEezOnc6rPmfHrj0fL9EYVfiFqgM2xzezQ00MAE8WEaC'); 

const Pricing = () => {
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "",
      featured: false,
      ctaText: "Get Started",
      features: [
        "Basic activity tracking",
        "Daily time reports",
        "3 website alerts",
        "7-day history",
        "Manual data export"
      ]
    },
    {
      name: "Pro",
      price: "$5",
      period: "per month",
      featured: true,
      ctaText: "Start Pro",
      features: [
        "Advanced analytics",
        "Unlimited alerts",
        "30-day history",
        "Automatic reports",
        "Cross-device sync",
        "Priority support",
        "CSV/JSON exports"
      ]
    }
  ];

  const handleProClick = async (event) => {
    event.preventDefault();
    
    // Get Stripe.js instance
    const stripe = await stripePromise;

    // Call your backend to create the Checkout Session
    const response = await fetch('http://localhost:3000/create-checkout-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        priceId: 'price_1Rb0TU4anPSdQJxRy9snWcwd', 
      }),
    });

    const session = await response.json();

    // When the customer clicks on the button, redirect them to Checkout.
    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      // If redirectToCheckout fails, display error to your customer
      console.error(result.error.message);
    }
  };

  return (
    <>
      <section className="pricing-section">
        <div className="pricing-background">
          <div className="pricing-gradient"></div>
        </div>
        
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              <span className="section-number">04</span> Choose Your Plan
            </h2>
            <p className="section-subtitle">
              Choose the plan that works best for you. 
            </p>
          </div>

          <div className="pricing-grid">
            {plans.map((plan, index) => (
              <div 
                className={`pricing-card ${plan.featured ? 'featured' : ''}`} 
                key={index}
              >
                {plan.featured && (
                  <div className="featured-badge">
                    <FiStar className="star-icon" /> Most Popular
                  </div>
                )}
                
                <div className="plan-header">
                  <h3 className="plan-name">{plan.name}</h3>
                  <div className="plan-price">
                    <span className="amount">{plan.price}</span>
                    <span className="period">/{plan.period}</span>
                  </div>
                </div>

                <ul className="plan-features">
                  {plan.features.map((feature, idx) => (
                    <li key={idx}>
                      <div className="feature-icon-container">
                        <FiCheck className="feature-icon" />
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="cta-container">
                  {plan.name === "Pro" ? (
                    <button 
                      onClick={handleProClick}
                      className={`cta-button ${plan.featured ? 'primary' : 'secondary'}`}
                    >
                      {plan.ctaText}
                      <span className="hover-effect"></span>
                    </button>
                  ) : (
                    <Link 
                      to="/" 
                      className={`cta-button ${plan.featured ? 'primary' : 'secondary'}`}
                    >
                      {plan.ctaText}
                      <span className="hover-effect"></span>
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
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
    </>
  );
};

export default Pricing;