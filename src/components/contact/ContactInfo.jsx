import React from 'react';
import { collegeInfo } from '../../data/siteData';

export function ContactInfo() {
  return (
    <div className="contact-info-card">
      <h3>Campus Information</h3>

      <div className="info-item">
        <h4>📍 Campus Address</h4>
        <p>{collegeInfo.address}</p>
      </div>

      <div className="info-item">
        <h4>📞 Phone Inquiries</h4>
        <p>{collegeInfo.phones.join('\n')}</p>
      </div>

      <div className="info-item">
        <h4>✉️ Email Address</h4>
        <p>{collegeInfo.emails.join('\n')}</p>
      </div>

      <div className="info-item">
        <h4>⏰ Office Timings</h4>
        <p>{collegeInfo.officeHours}</p>
      </div>
    </div>
  );
}
