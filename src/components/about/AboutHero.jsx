import React from 'react';
import { collegeInfo } from '../../data/siteData';

export function AboutHero() {
  return (
    <section className="content-card">
      <span className="section-badge">Our Legacy & Vision</span>
      <h1 className="page-title">About {collegeInfo.name}</h1>
      <p className="page-lead">
        Two decades of inspiring curious minds, fostering impactful research, and nurturing future global leaders.
      </p>

      <div className="featured-image-frame">
        <img
          src={collegeInfo.campusImageUrl}
          alt={`Students walking on ${collegeInfo.name} campus`}
          className="featured-image"
          loading="eager"
        />
      </div>

      <h2>Our Journey & Heritage</h2>
      <p>
        Established in {collegeInfo.estYear}, {collegeInfo.name} started with a visionary commitment to provide accessible, high-caliber higher education. Over the years, the institution has flourished into a vibrant hub of multidisciplinary learning, recognized for academic distinction, modern facilities, and a supportive campus culture.
      </p>
    </section>
  );
}
