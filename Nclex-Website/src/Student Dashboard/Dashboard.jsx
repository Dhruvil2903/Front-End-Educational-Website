import React, { useState } from 'react'

import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import WelcomePage from '../StudentDashboardComponents/WelcomePage'
import CourseProgressTracker from '../StudentDashboardComponents/CourseProgressTracker'

const Dashboard = () => {
    

    return (
        <>
            <Navbar />

            <div className=' '>
                <WelcomePage />
            </div>

            <div>
                <CourseProgressTracker />
            </div>

            <Footer />
        </>
    )
}

export default Dashboard 