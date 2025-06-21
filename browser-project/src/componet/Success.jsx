import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiCheckCircle } from 'react-icons/fi';
import './PaymentStatus.css';

const Success = () => {
  // Optional: Verify the payment session (recommended for security)
  useEffect(() => {
    const verifySession = async () => {
      const sessionId = new URLSearchParams(window.location.search).get('session_id');
      if (sessionId) {
        try {
          const response = await fetch('/verify-session', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ sessionId }),
          });
          const data = await response.json();
          console.log('Payment verified:', data);
        } catch (err) {
          console.error('Error verifying payment:', err);
        }
      }
    };
    verifySession();
  }, []);

  return (
    <div className="payment-status-container">
      <div className="payment-status-card success">
        <FiCheckCircle className="status-icon" size={48} />
        <h2>Payment Successful!</h2>
        <p>Thank you for subscribing to Pro. Your account has been upgraded.</p>
        <div className="action-buttons">
          <Link to="/" className="btn-primary">
            Go to Home
          </Link>
          
        </div>
      </div>
    </div>
  );
};

export default Success;