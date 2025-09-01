import React from 'react'

const CourseProgressTracker = () => {
    const radius = 10;
    return (
        <div className='flex flex-col bg-black h-[400px] w-[450px] m-4 rounded-2xl shadow-2xl border border-gray-300'>
            <h1 className='text-center font-semibold text-2xl bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent  '>Progress Tracker</h1>

            <hr />
            <div className='grid grid-cols-2 text-center'>

                <div className=' flex flex-col justify-center h-[300px] items-center text-white '>
                   <div className='flex flex-col justify-center items-center'>
                     <p className=''>hello, this is your overall progress bar</p>
                   </div>

                </div>

                <div className='flex flex-col  justify-center items-center h-[300px]  text-white'>
                    <div className=" flex justify-center items-center h-[200px] w-[200px] rounded-full border-20 border-t-blue-400 border-l-blue-400">
                           <h2 className='text-green-400 font-semibold'>Progress 50%</h2>
                    </div>

                </div>
            </div>



        </div>
    )
}

export default CourseProgressTracker