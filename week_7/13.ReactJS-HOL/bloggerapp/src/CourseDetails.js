import React from 'react';

function CourseDetails(props) {
  const show = props.show;
  const courses = [
    { name: 'Angular', date: '4/5/2021' },
    { name: 'React', date: '6/3/2021' }
  ];

  // Conditional Rendering (Technique 1)
  if (!show) return null;

  return (
    <div className="mystyle1">
      <h1>Course Details</h1>
      {courses.map((course, index) => (
        <div key={index}>
          <h3>{course.name}</h3>
          <h4>{course.date}</h4>
        </div>
      ))}
    </div>
  );
}

export default CourseDetails;
