import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import WhyToChoose from './Components/WhyToChoose'
import Instructors from './Components/Instructors'
import Testimonial from './Components/Testimonial'
import Footer from './Components/Footer'

import Login from './Home/Login'
import Register from './Home/Register'
import Course from './Components/Course'

function App() {
  return (
    <Router>
      <div className='bg-gray-50'>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div className='flex justify-center items-center sm:px-16 px-6'>
                  <div className='xl:max-w-[1280px] w-full'>
                    <Navbar />
                  </div>
                </div>
                <div className='flex justify-center items-start sm:px-16 px-6'>
                  <div className='xl:max-w-[1280px] w-full'>
                    <Hero />
                  </div>
                </div>
                <div className='sm:px-16 px-6'>
                  <div className='xl:max-w-[1280px] w-full'>
                    <WhyToChoose />
                    <Instructors />
                    <Testimonial />
                    <Course/>
                    <Footer />
                  </div>
                </div>
              </>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
