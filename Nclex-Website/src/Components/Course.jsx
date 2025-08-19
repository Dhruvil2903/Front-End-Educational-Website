import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Course = () => {
  const [courses, setCourses] = useState([]);
  const [courseName, setCourseName] = useState('');
  const [courseDescription, setCourseDescription] = useState('');

  // Fetch all courses
  const fetchCourses = () => {
    axios.get('http://localhost:8083/api/courses')
      .then(response => setCourses(response.data))
      .catch(error => console.error(error));
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  // Add course
  const handleAdd = () => {
    if (!courseName || !courseDescription) return;
    axios.post('http://localhost:8083/api/courses/createCourse', { courseName, courseDescription })
      .then(() => {
        fetchCourses(); // Refresh course list
        setCourseName('');
        setCourseDescription('');
      });
  };

  // Delete course
  const handleDelete = (id) => {
    axios.delete(`http://localhost:8083/api/courses/${id}`)
      .then(() => fetchCourses());
  };

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Course Management</h1>

      
      <div className="flex flex-col gap-4 mb-6 bg-gray-100 p-4 rounded-xl shadow">
        <input
          type="text"
          placeholder="Course Title"
          value={courseName}
          onChange={(e) => setCourseName(e.target.value)}
          className="p-2 border rounded"
        />
        <textarea
          placeholder="Course Description"
          value={courseDescription}
          onChange={(e) => setCourseDescription(e.target.value)}
          className="p-2 border rounded"
        />
        <button
          onClick={handleAdd}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Add Course
        </button>
      </div>

      {/* List of Courses */}
      <ul className="space-y-4">
        {courses.map(course => (
          <li key={course.id} className="p-4 bg-white shadow rounded flex justify-between items-center">
            <div>
              <h3 className="text-xl font-semibold">{course.courseName}</h3>
              <p className="text-gray-600">{course.courseDescription}</p>
            </div>
            <button
              onClick={() => handleDelete(course.id)}
              className="text-red-500 hover:text-red-700"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Course;
