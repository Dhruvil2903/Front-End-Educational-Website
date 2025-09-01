import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar';

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



  return (
    <>
      <Navbar/>
    <div className="p-4 max-w-3xl min-h-screen">
      <div className='flex flex-col border border-white w-[300px] h-[300px]'>
        <h1 className='flex text-white justify-center'>Course details</h1>
        
      </div>
    </div>
    </>
  );
};

export default Course;
