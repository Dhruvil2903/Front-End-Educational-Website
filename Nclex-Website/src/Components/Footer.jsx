import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <div className=''>


                <div className='grid md:grid-cols-3 grid-rows-1 justify-center bg-blue-500 text-white p-2 rounded-xl m-2'>
                    <div className='flex flex-col w-[100px] ml-10'>
                        <h2 className='text-center font-bold text-black md:shadow-xl'>Navigation</h2>
                        <ul className='text-center font-bold '>
                            <Link to="/home"><li className='hover:bg-white hover:text-black hover:scale-105 transition-transform duration-300 ease-in-out rounded-2xl'>Home</li></Link>
                            <Link to='/courses'><li className='hover:bg-white hover:text-black hover:scale-105 transition-transform duration-300 ease-in-out rounded-2xl'>Courses</li></Link>
                            <Link to='/about us'><li className='hover:bg-white hover:text-black hover:scale-105 transition-transform duration-300 ease-in-out rounded-2xl'>About US</li></Link>
                            <Link to='/price'><li className='hover:bg-white hover:text-black hover:scale-105 transition-transform duration-300 ease-in-out rounded-2xl'>Pricing</li></Link>
                        </ul>
                    </div>
                    <div className='flex flex-col w-[100px] ml-10'>
                        <h3 className='text-center font-bold text-black md:shadow-xl'>Law</h3>
                        <ul className='text-center font-bold '>
                        <Link to='/privacy'><li className='hover:bg-white hover:text-black hover:scale-105 transition-transform duration-300 ease-in-out rounded-2xl'>Privacy</li></Link>
                        <Link to='/refund'><li className='hover:bg-white hover:text-black hover:scale-105 transition-transform duration-300 ease-in-out rounded-2xl'>Refund</li></Link>
                        <Link to='/terms'><li className='hover:bg-white hover:text-black hover:scale-105 transition-transform duration-300 ease-in-out rounded-2xl'>Terms</li></Link>
                        </ul> 
                    </div>
                    <div className='flex flex-col w-[100px] ml-10'>
                    <h3 className='text-center font-bold text-black md:shadow-xl'>Social Media</h3>
                    <ul className='text-center font-bold'>
                        <Link to='/insta'><li className='hover:bg-white hover:text-black hover:scale-105 transition-transform duration-300 ease-in-out rounded-2xl'>instagram</li></Link>
                        <Link><li className='hover:bg-white hover:text-black hover:scale-105 transition-transform duration-300 ease-in-out rounded-2xl'>WhatsApp</li></Link>
                    </ul>
                    </div>



                </div>
                <div className='bg-blue-500 rounded-2xl m-2 text-white '>

                <h3 className='text-center font-bold hover:scale-105 transition-transform duration-300 animate-pulse ease-in-out'>&copy; Copyright All Rights Are Reserved</h3>
                </div>
            </div>
        </>
    )
}

export default Footer