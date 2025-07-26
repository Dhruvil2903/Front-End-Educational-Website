import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Login from '../Home/Login';
const Navbar = () => {
    const[isOpen , setIsOpen] = useState(false);
    return (
        
        <div className='p-4 m-2 bg-blue-700  text-white rounded-2xl'>
            <div className='flex justify-between items-center'>
                <div className='text-lg font-bold'>
                    PulsePoint
                </div>
                <button className='md:hidden text-white' onClick={()=>{setIsOpen(!isOpen)}}>
                    <svg className='w-6 h-6' fill='none' stroke='currentColor' strokeWidth='2' viewBox='0 0 24 24' >
                        <path strokeLinecap='round' strokeLinejoin='round' d='M4 6h16M4 12h16M4 18h16'></path>
                    </svg>
                </button>

            </div>
            <div className={`md:flex md:justify-between md:items-center ${isOpen ? 'block' : 'hidden'} mt-4 md:mt-0`}>

                <ul className='flex flex-col md:flex-row gap-4 md:gap-10 text-sm md:text-base'>
                    <Link to="/home"><li className='hover:bg-white hover:text-black hover:scale-105 hover:transition-transform duration-300 ease-in-out rounded-2xl p-2'>Home</li></Link>
                    <Link to=""><li className='hover:bg-white hover:text-black hover:scale-105 hover:transition-transform duration-300 ease-in-out rounded-2xl p-2'>About Us</li></Link>
                    <Link to=""><li className='hover:bg-white hover:text-black hover:scale-105 hover:transition-transform duration-300 ease-in-out rounded-2xl p-2'>Courses</li></Link>
                    <Link to=""><li className='hover:bg-white hover:text-black hover:scale-105 hover:transition-transform duration-300 ease-in-out rounded-2xl p-2'>Pricing</li></Link>
                </ul>

            <div className='flex flex-col md:flex-row mt-4 md:mt-0 gap-4'>
                <Link className='border cursor-pointer border-white  hover:border-blue-50 text-white hover:text-black hover:bg-white rounded-2xl p-2 hover:shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out' to='/login'>Login</Link>
                <Link className='border cursor-pointer border-white  hover:border-blue-50 text-white hover:text-black hover:bg-white rounded-2xl p-2 hover:shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out' to='/register'>Register</Link>
            </div>
            </div>

        </div>
    )
}

export default Navbar