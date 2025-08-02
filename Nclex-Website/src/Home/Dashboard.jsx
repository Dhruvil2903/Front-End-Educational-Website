import React, { useState } from 'react'

import Navbar from '../Components/Navbar'
import { Link } from 'react-router-dom'
import Footer from '../Components/Footer'
import Testimonial from '../Components/Testimonial'
import Instructors from '../Components/Instructors'
import Hero from '../Components/Hero'
import WhyToChoose from '../Components/WhyToChoose'
import pharma from '../assets/phrama.jpeg'
const Dashboard = () => {
    const userName = localStorage.getItem('userName');

    const today = new Date();
    const formattedDate = today.toLocaleDateString('en-CA', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    })

    return (
        <>
            <Navbar />

            <div className=' bg-gray-50 flex justify-center items-center py-10 px-4'>
                <div className="flex flex-col md:flex-row bg-gray-100 w-full max-w-4xl rounded-2xl border-1 shadow-2xl p-6 gap-6">
                    <div className='flex flex-col items-start justify-center flex-1 space-y-4 text-center md:text-left'>
                    <p className='text-blue-700 text-xl font-semibold'>welcome {userName}</p>
                    <h1 className='text-white font-bold text-lg p-3 rounded-xl bg-gradient-to-r from-red-700 to-blue-700 object-contain w-full md:w-auto'>Date is : {formattedDate}</h1>
                    </div>
                    
                    <div className="flex justify-center items-center flex-1">
                        <img className='w-32 h-32 md:w-40 md:h-40 object-cover bg-amber-500 border-4 rounded-full' src={pharma} alt="" />
                    </div>
                    </div> 

                </div>


            

            <Footer />
        </>
    )
}

export default Dashboard 