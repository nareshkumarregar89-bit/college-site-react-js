import React from 'react';
import { whyChooseFeatures } from '../../data/siteData';

export function FeaturesGrid() {
  return (
    <section className="content-card">
      <h2>Why Choose Our College?</h2>
      <p>Discover the learning environment and opportunities that set our students up for long-term success.</p>

      <div className="features-grid">
        {whyChooseFeatures.map((feature, idx) => (
          <div key={idx} className="feature-box">
            <span className="feature-icon" role="img" aria-label={feature.title}>
              {feature.icon}
            </span>
            <h4>{feature.title}</h4>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
