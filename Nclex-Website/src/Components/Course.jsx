import React from 'react'
import { courses } from "./Index";
const Course = () => {
  return (
    <>

      <h3 className='text-center font-bold text-2xl'>Courses</h3>
      <div className='flex justify-center bg-blue-500 text-white py-4 rounded-2xl m-2'>
        <div className='w-full max-w-4xl px-4'>
          <ul className='flex flex-col sm:flex-row gap-6 sm:gap-10 justify-between items-center sm:text-center leading-[53px] font-bold'>
            {courses.map((course, index) => (
              <li key={course.id} className={`w-full sm:w-auto ${index === 0 ? 'text-left' : index === 1 ? 'text-center' : 'text-right'} hover:scale-105 hover:transition-transform duration-300 ease-in-out hover:bg-white hover:text-black rounded-2xl p-2`}>
                <a href={`#${course.id}`}>{course.title}</a>
              </li>

            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

export default Course