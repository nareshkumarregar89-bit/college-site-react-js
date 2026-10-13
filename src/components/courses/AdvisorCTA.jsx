import React from 'react';
import { Link } from 'react-router-dom';

export function AdvisorCTA() {
  return (
    <div style={{
      backgroundColor: 'var(--bg-alt)',
      padding: '24px',
      borderRadius: 'var(--radius-md)',
      marginTop: '30px'
    }}>
      <h3>Unsure Which Program Fits Your Goals?</h3>
      <p>Our academic advisors are here to help you evaluate admission criteria, scholarships, and career paths.</p>
      <Link to="/contact" className="btn btn-primary">Speak to an Advisor</Link>
    </div>
  );
}
