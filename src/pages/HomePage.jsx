import React from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { FeaturesGrid } from '../components/home/FeaturesGrid';
import { NoticeBoard } from '../components/home/NoticeBoard';

export function HomePage() {
  return (
    <main className="main-wrapper">
      <div className="container">
        <HeroSection />
        <FeaturesGrid />
        <NoticeBoard />
      </div>
    </main>
  );
}
