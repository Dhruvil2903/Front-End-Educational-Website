import React from 'react'

const Testimonial = () => {
  return (
    <section className='p-6 bg-white'>
                <h3 className='text-2xl font-bold text-center mb-6'>Testimonial</h3>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
                    <div className='flex flex-col items-center bg-gray-50 p-4 rounded-xl shadow'>
                        <h3 className='text-lg font-semibold'>Dhruvil Patel</h3>
                        <p className='text-center text-sm mt-2'>5+ year of experience as a Registered Nurse, NCLEX-RN Expert and having deep knowledge of Canadian work environment.</p>
                    </div>
                    <div className="flex flex-col items-center bg-gray-50 p-4 rounded-xl shadow">
                        <h3 className='text-lg font-semibold'>Other Instructor</h3>
                        <p className='text-ceneter text-sm mt-2'>Experience</p>
                    </div>
                </div>

            </section>
  )
}

export default Testimonial