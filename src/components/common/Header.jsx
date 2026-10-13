import React from 'react';
import { collegeInfo } from '../../data/siteData';

export function Header() {
  return (
    <header className="site-header">
      <div className="container header-content">
        <img
          src={collegeInfo.logoUrl}
          alt={`${collegeInfo.name} Official Logo`}
          className="site-logo"
        />
        <div className="brand-text">
          <h1>{collegeInfo.name}</h1>
          <p>{collegeInfo.tagline}</p>
        </div>
      </div>
    </header>
  );
}
