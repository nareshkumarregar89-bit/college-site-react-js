import React from 'react';
import { announcements } from '../../data/siteData';

export function NoticeBoard() {
  return (
    <section className="content-card">
      <h2>Latest Announcements</h2>
      <ul className="notice-list">
        {announcements.map((notice, index) => (
          <li key={index}>{notice}</li>
        ))}
      </ul>
    </section>
  );
}
