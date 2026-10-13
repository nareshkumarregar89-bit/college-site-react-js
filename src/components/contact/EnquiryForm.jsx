import React, { useState } from 'react';

const initialFormData = {
  fullname: '',
  email: '',
  phone: '',
  course: 'bca',
  message: '',
};

export function EnquiryForm() {
  const [formData, setFormData] = useState(initialFormData);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullname || !formData.email || !formData.phone) return;
    setIsSubmitted(true);
    setFormData(initialFormData);
  };

  const handleReset = () => {
    setFormData(initialFormData);
    setIsSubmitted(false);
  };

  return (
    <div>
      <h2>Send Us an Enquiry</h2>
      <p>Fill out the details below and an admission officer will reach back to you shortly.</p>

      {isSubmitted && (
        <div className="form-success-banner" role="alert">
          <span>✅ Thank you! Your enquiry has been received. Our admissions team will contact you within 24 hours.</span>
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="fullname">Full Name *</label>
          <input
            type="text"
            id="fullname"
            name="fullname"
            className="form-control"
            placeholder="e.g. Rahul Sharma"
            value={formData.fullname}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email Address *</label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-control"
            placeholder="name@example.com"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone Number *</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="form-control"
            placeholder="10-digit mobile number"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="course">Interested Course</label>
          <select
            id="course"
            name="course"
            className="form-control"
            value={formData.course}
            onChange={handleChange}
          >
            <option value="bca">Bachelor of Computer Applications (BCA)</option>
            <option value="bsc">B.Sc Computer Science</option>
            <option value="bba">Bachelor of Business Administration (BBA)</option>
            <option value="bcom">Bachelor of Commerce (B.Com)</option>
            <option value="ba">Bachelor of Arts (B.A.)</option>
            <option value="mca">Master of Computer Applications (MCA)</option>
            <option value="mba">Master of Business Administration (MBA)</option>
            <option value="mcom">Master of Commerce (M.Com)</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="message">Your Message / Query</label>
          <textarea
            id="message"
            name="message"
            className="form-control"
            rows="4"
            placeholder="Ask about admission process, fee structure, scholarships..."
            value={formData.message}
            onChange={handleChange}
          />
        </div>

        <div className="form-actions">
          <button type="submit" className="btn btn-primary">
            Submit Enquiry
          </button>
          <button type="button" onClick={handleReset} className="btn btn-secondary">
            Clear
          </button>
        </div>
      </form>
    </div>
  );
}
