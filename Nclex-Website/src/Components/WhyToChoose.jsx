import React from 'react'

const WhyToChoose = () => {
  return (
   <div className='grid grid-cols-1 md:grid-cols-2 gap-4 p-4'>

                <div className="flex flex-col rounded-2xl  bg-black text-white h-auto justify-center md:[500px] shadow-md hover:shadow-white m-4 ">
                    <h2 className='text-center font-bold md:text-2xl font-open bg-gradient-to-r from-violet-700 to-white bg-clip-text text-transparent '>Why to choose Us</h2>
                    <hr />
                    <ul className='mt-4 tracking-wide font-bold text-center space-y-2 font-open'>
                        <li>1. 100% Passing rate ✅</li>
                        <li>2. Daily live classes</li>
                        <li>3. Personalized mentoring</li>
                        <li>4. Support Sessions</li>
                        <li>5. Affordable Plans</li>
                        <li>6.🧪Practice Quiz and mock tests🧪</li>
                    </ul>
                </div>
                <div className='flex flex-col bg-black text-white rounded-2xl h-auto w-auto m-4 shadow-sm hover:shadow-white'>
                    <h2 className='text-center md:text-2xl font-bold font-open bg-gradient-to-r from-violet-700 to-white bg-clip-text text-transparent '>Course Highlights</h2>
                    <hr />
                    <ul className="mt-4 text-center tracking-wide font-bold space-y-2 font-open">
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