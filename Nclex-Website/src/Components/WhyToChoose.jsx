import React from 'react'

const WhyToChoose = () => {
  return (
   <div className='grid grid-cols-1 md:grid-cols-2 gap-4 p-4'>

                <div className="flex flex-col rounded-2xl  bg-white text-black border border-gray-200 h-auto  justify-center w-full md:[500px] shadow-2xl m-4 hover:shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out">
                    <h2 className='text-center font-bold text-black md:text-2xl'>Why to choose Us</h2>
                    <ul className='mt-4 tracking-wide font-bold text-center space-y-2'>
                        <li>1. 100% Passing rate ✅</li>
                        <li>2. Daily live classes</li>
                        <li>3. Personalized mentoring</li>
                        <li>4. Support Sessions</li>
                        <li>5. Affordable Plans</li>
                        <li>6. 🧪Practice Quiz and mock tests🧪</li>
                    </ul>
                </div>
                <div className='flex flex-col bg-white text-black rounded-2xl shadow-2xl h-auto w-auto m-4 border border-gray-300 hover:shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out'>
                    <h2 className='text-center text-black md:text-2xl font-bold'>Course Highlights</h2>
                    <ul className="mt-4 text-center tracking-wide font-bold space-y-2">
                        <li>1.Daily/weekly schedule preview</li>
                        <li>2.Total hours of teaching</li>
                        <li>3.Access to recorded lectures</li>
                        <li>4.Notes/PDFs and MCQs bank</li>
                        <li>5.Live solving, Q&A</li>
                        <li>6.For more please join with us</li>
                    </ul>
                </div>
            </div>
  )
}

export default WhyToChoose