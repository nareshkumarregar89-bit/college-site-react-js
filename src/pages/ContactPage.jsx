import React from 'react';
import { ContactInfo } from '../components/contact/ContactInfo';
import { EnquiryForm } from '../components/contact/EnquiryForm';

export function ContactPage() {
  return (
    <main className="main-wrapper">
      <div className="container">
        <section className="content-card">
          <span className="section-badge">Get In Touch</span>
          <h1 className="page-title">Contact Admissions & Campus Office</h1>
          <p className="page-lead">
            Have questions regarding programs, admissions, or fees? Our team is here to assist you every step of the way.
          </p>

          <div className="contact-grid">
            <ContactInfo />
            <EnquiryForm />
          </div>
        </section>
      </div>
    </main>
  );
}
