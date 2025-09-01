import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Login from '../Home/Login';
import Hero from '../Components/Hero';
import { AuthContext } from '../Context/AuthContext';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { isLogin, setLogin } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        setLogin(false); // Set login to false
        navigate('/home'); // Redirect to login
    };

    return (

        <div className='p-4 m-2 bg-black text-white rounded-2xl font-open'>
            <div className='flex justify-between items-center'>
                <div className=' bg-gradient-to-r from-blue-700 to-orange-300 bg-clip-text text-transparent text-2xl font-bold'>
                    PulsePoint
                </div>
                <button className='md:hidden text-white' onClick={() => { setIsOpen(!isOpen) }}>
                    <svg className='w-6 h-6' fill='none' stroke='currentColor' strokeWidth='2' viewBox='0 0 24 24' >
                        <path strokeLinecap='round' strokeLinejoin='round' d='M4 6h16M4 12h16M4 18h16'></path>
                    </svg>
                </button>

            </div>
            <div className={`md:flex md:justify-between md:items-center ${isOpen ? 'block' : 'hidden'} mt-4 md:mt-0`}>

                <ul className='flex flex-col md:flex-row gap-4 md:gap-10 text-sm md:text-base'>
                    <Link to="/home"><li className='border border-blue-700 hover:bg-white  hover:text-black hover:scale-105 hover:transition-transform duration-300 ease-in-out rounded-2xl p-2'>Home</li></Link>
                    <Link to=""><li className='border border-blue-700 hover:bg-white  hover:text-black hover:scale-105 hover:transition-transform duration-300 ease-in-out rounded-2xl p-2'>About Us</li></Link>
                    <Link to="/course"><li className='border border-violet-700 hover:bg-white  hover:text-black hover:scale-105 hover:transition-transform duration-300 ease-in-out rounded-2xl p-2'>Courses</li></Link>
                    <Link to="/pricing"><li className='border border-green-700 hover:bg-white  hover:text-black hover:scale-105 hover:transition-transform duration-300 ease-in-out rounded-2xl p-2'>Pricing</li></Link>
                    <Link to="/dashboard"><li className='border border-yellow-700 hover:bg-white  hover:text-black hover:scale-105 hover:transition-transform duration-300 ease-in-out rounded-2xl p-2'>Dashboard</li></Link>
                </ul>

                {/* Login/Register or Logout */}
                <div className='flex flex-col md:flex-row gap-4 mt-4 md:mt-0'>
                    {isLogin ? (
                        <button onClick={handleLogout} className='nav-btn hover:border-white hover:scale-105 hover:transition-transform duration-300 ease-in-out border-2 p-2 rounded-xl'>Logout</button>
                    ) : (
                        <>

                            <Link to='/login' className='nav-btn border-purple-700 hover:border-white hover:scale-105 hover:transition-transform duration-300 ease-in-out border-2 p-2 rounded-xl'>Login</Link>
                            <Link to='/register' className='nav-btn border-purple-700 hover:border-white hover:scale-105 hover:transition-transform duration-300 ease-in-out border-2 p-2 rounded-xl'>Register</Link>
                        </>
                    )}
                </div>

            </div>

        </div>
    )
}

export default Navbar