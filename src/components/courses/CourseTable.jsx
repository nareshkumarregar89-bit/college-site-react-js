import React from 'react';

export function CourseTable({ title, courses }) {
  return (
    <>
      <h2>{title}</h2>
      <div className="table-responsive">
        <table className="modern-table">
          <thead>
            <tr>
              <th>Course Name</th>
              <th>Duration</th>
              <th>Eligibility Criteria</th>
              <th>Available Seats</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course, idx) => (
              <tr key={idx}>
                <td><strong>{course.name}</strong></td>
                <td>{course.duration}</td>
                <td>{course.eligibility}</td>
                <td><span className="badge">{course.seats}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
