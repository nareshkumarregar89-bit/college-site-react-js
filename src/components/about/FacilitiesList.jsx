import React from 'react';
import { facilities } from '../../data/siteData';

export function FacilitiesList() {
  return (
    <section className="content-card">
      <h2>World-Class Campus Facilities</h2>
      <p>Our campus is engineered to support both rigorous study and active social life:</p>

      <ul className="styled-list">
        {facilities.map((facility, idx) => (
          <li key={idx}>
            <strong>{facility.title}:</strong> {facility.detail}
          </li>
        ))}
      </ul>
    </section>
  );
}
