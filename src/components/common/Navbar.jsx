import React from 'react';
import { NavLink } from 'react-router-dom';
import { navLinks } from '../../data/siteData';

export function Navbar() {
  return (
    <nav className="site-nav" aria-label="Main Navigation">
      <div className="container">
        <ul className="nav-links">
          {navLinks.map((link) => (
            <li key={link.path}>
              <NavLink
                to={link.path}
                className={({ isActive }) => (isActive ? 'active' : '')}
                end={link.path === '/'}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
