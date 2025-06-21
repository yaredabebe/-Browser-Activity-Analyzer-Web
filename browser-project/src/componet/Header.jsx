import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./header.css";
import browserLogo from "../assets/browser.png";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <img src={browserLogo} alt="Browser Logo" />
          Browser Activity Analyzer
        </div>

        <button
          className="menu-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={isMobileMenuOpen}
        >
          ☰
        </button>

        <nav className={`nav ${isMobileMenuOpen ? "open" : ""}`}>
          <Link 
            to="/" 
            className={`nav-link ${location.pathname === "/" ? "active" : ""}`}
            onClick={closeMobileMenu}
          >
            Home
          </Link>
          <Link 
            to="/features" 
            className={`nav-link ${location.pathname === "/features" ? "active" : ""}`}
            onClick={closeMobileMenu}
          >
            Features
          </Link>
          <Link 
            to="/pricing" 
            className={`nav-link ${location.pathname === "/pricing" ? "active" : ""}`}
            onClick={closeMobileMenu}
          >
            Pricing
          </Link>
          <Link 
            to="/faq" 
            className={`nav-link ${location.pathname === "/faq" ? "active" : ""}`}
            onClick={closeMobileMenu}
          >
            FAQ
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;