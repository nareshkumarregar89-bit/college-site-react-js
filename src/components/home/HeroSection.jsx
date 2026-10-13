import React from 'react';
import { collegeInfo } from '../../data/siteData';

export function HeroSection() {
  return (
    <section className="content-card">
      <span className="section-badge">Admissions Open 2026-27</span>
      <h1 className="page-title">Welcome to {collegeInfo.name}</h1>
      <p className="page-lead">
        We deliver excellence in higher education, fostering innovation, leadership, and hands-on skills in a vibrant campus community.
      </p>

      <div className="featured-image-frame">
        <img
          src={collegeInfo.campusImageUrl}
          alt={`${collegeInfo.name} Students on Campus`}
          className="featured-image"
          loading="eager"
        />
      </div>
    </section>
  );
}
