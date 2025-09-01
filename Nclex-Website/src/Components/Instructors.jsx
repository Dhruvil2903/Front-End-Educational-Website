import React from 'react'
import pharma from '../assets/phrama.jpeg'
const Instructors = () => {
    return (
        <section className='p-6 bg-black'>
            <h3 className='text-2xl  bg-gradient-to-r from-purple-700 to-pink-400 bg-clip-text text-transparent font-bold text-center mb-6 font-open'>Meet the instructors</h3>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
                <div className='flex flex-col items-center bg-black p-4 rounded-xl shadow font-open'>
                    <img src={pharma} alt="" className='w-24 h-24 rounded-full mb-4 object-cover' />
                    <h3 className='text-lg bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent  font-semibold '>Hiral Patel</h3>
                    <p className='text-sm text-white '>RN, BSN</p>
                    <p className='text-center text-white text-sm mt-2  '>5+ year of experience as a Registered Nurse, NCLEX-RN Expert</p>
                </div>
                <div className="flex flex-col items-center bg-black p-4 rounded-xl shadow font-open">
                    <img src={pharma} alt="" className='w-24 h-24 rounded-full mb-4 object-cover' />
                    <h3 className='text-lg bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent font-semibold'>Other Instructor</h3>
                    <p className='text-sm text-white'>RN, BSN</p>
                    <p className='text-ceneter text-white text-sm mt-2'>Experience</p>
                </div>
            </div>

        </section>
    )
}

export default Instructors