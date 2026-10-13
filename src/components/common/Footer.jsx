import React from 'react';
import { Link } from 'react-router-dom';
import { collegeInfo, navLinks } from '../../data/siteData';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h4>{collegeInfo.name}</h4>
            <p>{collegeInfo.address}</p>
          </div>
          <ul className="footer-links">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link to={link.path}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer-bottom">
          <p>&copy; {currentYear} {collegeInfo.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
