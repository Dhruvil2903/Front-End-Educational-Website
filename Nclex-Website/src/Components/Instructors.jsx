import React from 'react'
import pharma from '../assets/phrama.jpeg'
const Instructors = () => {
    return (
        <section className='p-6 bg-white'>
            <h3 className='text-2xl font-bold text-center mb-6'>Meet the instructors</h3>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
                <div className='flex flex-col items-center bg-gray-50 p-4 rounded-xl shadow'>
                    <img src={pharma} alt="" className='w-24 h-24 rounded-full mb-4 object-cover' />
                    <h3 className='text-lg font-semibold'>Hiral Patel</h3>
                    <p className='text-sm text-gray-600'>RN, BSN</p>
                    <p className='text-center text-sm mt-2'>5+ year of experience as a Registered Nurse, NCLEX-RN Expert</p>
                </div>
                <div className="flex flex-col items-center bg-gray-50 p-4 rounded-xl shadow">
                    <img src={pharma} alt="" className='w-24 h-24 rounded-full mb-4 object-cover' />
                    <h3 className='text-lg font-semibold'>Other Instructor</h3>
                    <p className='text-sm text-gray-600'>RN, BSN</p>
                    <p className='text-ceneter text-sm mt-2'>Experience</p>
                </div>
            </div>

        </section>
    )
}

export default Instructors