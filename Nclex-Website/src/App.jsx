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
import Patho from './Home/Patho'

import ProtectedRoute from './Context/ProtectedRoute'
import Pharma from './Home/Pharma'
import Pediatric from './Home/Pediatric'
import Pricing from './Home/Pricing'
import About from './Home/About'
import Dashboard from './Student Dashboard/Dashboard'


function App() {
  return (
    <Router>
      <div className='bg-black '>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div className='flex justify-center items-center sm:px-16 px-6 '>
                  <div className='xl:max-w-[1480px] w-full'>
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
                    <Footer />
                  </div>
                </div>
              </>
            }
          />
         <Route path='/dashboard' element ={
          <ProtectedRoute>
            <Dashboard/>
          </ProtectedRoute>
         }/>
          <Route path='/patho' element={
            <ProtectedRoute>
              <Patho/>
            </ProtectedRoute>}/>
            <Route path='/pharma' element = {
              <ProtectedRoute>
                <Pharma/>
              </ProtectedRoute>
            }/>
            <Route path = '/pediatric' element = {
              <ProtectedRoute>
                <Pediatric/>
              </ProtectedRoute>
            }/>
            <Route path = '/about' element = {
              <About/>
            }/>
            <Route path = '/course' element = {
              <ProtectedRoute>
                <Course/>
              </ProtectedRoute>
            }/>
          <Route path='/pricing' element = {<Pricing/>}/>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
