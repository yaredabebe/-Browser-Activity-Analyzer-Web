import React from 'react';
import { Link } from 'react-router-dom';
import { FiAlertTriangle } from 'react-icons/fi';
import './NotFound.css'; // Optional styling

const NotFound = () => {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <FiAlertTriangle className="not-found-icon" size={48} />
        <h1>404 - Page Not Found</h1>
        <p>The page you're looking for doesn't exist or has been moved.</p>
        <div className="action-buttons">
          <Link to="/" className="btn-primary">
            Go to Homepage
          </Link>
          
        </div>
      </div>
    </div>
  );
};

export default NotFound;