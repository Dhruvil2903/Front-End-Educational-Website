import React from 'react'

const CourseProgressTracker = () => {
    const radius = 10;
    return (
        <div className='flex flex-col bg-gray-100 h-[400px] w-[450px] m-4 rounded-2xl shadow-2xl border border-gray-300'>
            <h1 className='text-center font-semibold text-2xl'>Progress Tracker</h1>

            <hr />
            <div className='flex justify-center items-center h-auto text-center'>

                <div className='bg-amber-300 rounded-full border-2'>
                    <p className=''>hello, this is your progress bar for the given progress</p>

                </div>

                <div className='rounded-full border-2'>
                    
                </div>
            </div>



        </div>
    )
}

export default CourseProgressTracker