import React, { useState } from 'react';
import BookDetails from './BookDetails';
import BlogDetails from './BlogDetails';
import CourseDetails from './CourseDetails';
import './App.css';

function App() {
  const [showCourses, setShowCourses] = useState(true);

  return (
    <div>
      <div className="container">
        <div className="column">
          <BookDetails />
        </div>
        <div className="column">
          <BlogDetails />
        </div>
        <div className="column">
          {showCourses && <CourseDetails show={true} />}
        </div>
      </div>

      <div style={{ textAlign: "center" }}>
        <button onClick={() => setShowCourses(!showCourses)}>
          {showCourses ? "Hide Courses" : "Show Courses"}
        </button>
      </div>
    </div>
  );
}

export default App;
