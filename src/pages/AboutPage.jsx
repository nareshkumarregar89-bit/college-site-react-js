import React from 'react';
import { AboutHero } from '../components/about/AboutHero';
import { VisionMission } from '../components/about/VisionMission';
import { FacilitiesList } from '../components/about/FacilitiesList';

export function AboutPage() {
  return (
    <main className="main-wrapper">
      <div className="container">
        <AboutHero />
        <VisionMission />
        <FacilitiesList />
      </div>
    </main>
  );
}
