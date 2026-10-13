import React from 'react';
import { ugCourses, pgCourses } from '../data/siteData';
import { CourseTable } from '../components/courses/CourseTable';
import { AdvisorCTA } from '../components/courses/AdvisorCTA';

export function CoursesPage() {
  return (
    <main className="main-wrapper">
      <div className="container">
        <section className="content-card">
          <span className="section-badge">Academic Programs</span>
          <h1 className="page-title">Programs & Courses Offered</h1>
          <p className="page-lead">
            Choose from our industry-aligned degrees designed to prepare you for rewarding careers and cutting-edge research.
          </p>

          <CourseTable title="Undergraduate (UG) Programs" courses={ugCourses} />
          <CourseTable title="Postgraduate (PG) Programs" courses={pgCourses} />
          <AdvisorCTA />
        </section>
      </div>
    </main>
  );
}
