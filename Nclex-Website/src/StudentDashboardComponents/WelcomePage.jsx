import React from 'react'
import Pharma from '../Home/Pharma';

const WelcomePage = () => {
  const userName = localStorage.getItem('userName');

    const today = new Date();
    const formattedDate = today.toLocaleDateString('en-CA', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    })
  return (
    <div className='bg-black flex justify-center items-center py-10 px-4'>
      <div className="flex flex-col md:flex-row bg-black w-full max-w-4xl rounded-2xl shadow-2xl p-6 gap-6 border border-gray-400">
        <div className='flex flex-col items-start justify-center flex-1 space-y-4 text-center md:text-left'>
          <p className='bg-gradient-to-r from-yellow-200 to-white bg-clip-text text-transparent text-xl font-semibold'>welcome {userName}</p>
          <p className='text-xl bg-gradient-to-r from-pink-700 to-yellow-200 bg-clip-text text-transparent'>💪🏻Your success is our aim, keep working hard💪🏻.</p>
          <h1 className='text-white font-bold text-lg p-3 rounded-xl bg-gradient-to-r from-red-700 to-blue-700 object-contain w-full md:w-auto'>Date is : {formattedDate}</h1>

        </div>

        <div className="flex justify-center items-center flex-1">
          <img className='w-32 h-32 md:w-40 md:h-40 bg-black border-red-700 object-cover border-4 rounded-full' src={Pharma} alt="" />
        </div>
      </div>
    </div>
  )
}

export default WelcomePage