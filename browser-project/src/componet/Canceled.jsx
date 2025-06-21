import React from 'react';
import { Link } from 'react-router-dom';
import { FiXCircle } from 'react-icons/fi';
import './PaymentStatus.css';

const Canceled = () => {
  return (
    <div className="payment-status-container">
      <div className="payment-status-card canceled">
        <FiXCircle className="status-icon" size={48} />
        <h2>Payment Canceled</h2>
        <p>Your subscription was not completed. You can try again or contact support.</p>
        <div className="action-buttons">
          <Link to="/pricing" className="btn-primary">
            Try Again
          </Link>
          <Link to="/faq" className="btn-secondary">
            Contact Support
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Canceled;