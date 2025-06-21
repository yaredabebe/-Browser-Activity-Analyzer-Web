import React, { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import './Faq.css'
import { Link } from 'react-router-dom';
const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How does Browser Activity Analyzer track my browsing?",
      answer: "The extension monitors domain visits and time spent on each site using Chrome's webNavigation and tabs APIs. All processing happens locally in your browser."
    },
    {
      question: "Is my browsing data stored in the cloud?",
      answer: "No, all data is stored locally in your browser using chrome.storage.local. We never send your browsing data to any servers."
    },
    {
      question: "Can I export my browsing data?",
      answer: "Yes, you can export your data as CSV or JSON from the settings page at any time."
    },
    {
      question: "How do I set up alerts for time limits?",
      answer: "Go to the Alerts section in settings, specify the domains and time limits, and choose your preferred notification method."
    },
    {
      question: "Does this work with private/incognito browsing?",
      answer: "The extension can work in incognito mode if you enable 'Allow in incognito' in Chrome's extension settings, but tracking is disabled by default for privacy."
    },
    {
      question: "How can I delete all my collected data?",
      answer: "You can completely wipe all collected data by clicking 'Clear All Data' in the settings page. This action is irreversible."
    }
  ];


  return (
    <div className='home-container'>
    <section className="faq-section">
      <div className="container" >
        <h2 className="section-title">
          <span className="section-number">05</span> Frequently Asked Questions
        </h2>

        <div className="faq-grid">
          {faqs.map((faq, index) => (
            <div 
              className={`faq-item ${activeIndex === index ? 'active' : ''}`} 
              key={index}
            >
              <button 
                className="faq-question"
                onClick={() => toggleAccordion(index)}
                aria-expanded={activeIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span>{faq.question}</span>
                {activeIndex === index ? <FiChevronUp /> : <FiChevronDown />}
              </button>
              
              <div 
                id={`faq-answer-${index}`}
                className="faq-answer"
                style={{
                  maxHeight: activeIndex === index ? '500px' : '0',
                  opacity: activeIndex === index ? '1' : '0'
                }}
              >
                <p>{faq.answer}</p>
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
    </div>
  );
};

export default Faq;