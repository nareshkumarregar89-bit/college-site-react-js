import React from 'react';
import { guidingPillars } from '../../data/siteData';

export function VisionMission() {
  return (
    <section className="content-card">
      <h2>Vision & Mission</h2>

      <div className="features-grid">
        <div className="feature-box">
          <span className="feature-icon" role="img" aria-label="Target">🎯</span>
          <h4>Our Vision</h4>
          <p>
            To stand as a globally acknowledged academic sanctuary creating innovators, thinkers, and ethical leaders who make a tangible difference.
          </p>
        </div>

        <div className="feature-box">
          <span className="feature-icon" role="img" aria-label="Rocket">🚀</span>
          <h4>Our Mission</h4>
          <p>
            To cultivate intellectual rigor, creative thinking, and moral character through holistic education and experiential learning.
          </p>
        </div>
      </div>

      <h3>Guiding Pillars</h3>
      <ul className="styled-list">
        {guidingPillars.map((pillar, idx) => (
          <li key={idx}>{pillar}</li>
        ))}
      </ul>
    </section>
  );
}
