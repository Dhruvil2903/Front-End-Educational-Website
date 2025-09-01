import React from 'react'
import { Link } from 'react-router-dom'
import { FaInstagram } from "react-icons/fa";
import { MdWhatsapp } from "react-icons/md";

const Footer = () => {
    return (
        <div className=''>
            <div className='grid md:grid-cols-3 grid-rows-1 bg-black text-white p-4 rounded-xl m-2 font-semibold border-t-2 font-open'>

                {/* Navigation Column */}
                <div className='flex flex-col items-center text-center'>
                    <h2 className='font-bold bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent  md:shadow-xl mb-2'>Navigation</h2>
                    <ul className='space-y-2'>
                        <li>
                            <Link to="/home" className=' borderBlue hover:bg-white hover:text-black hover:scale-105 transition-transform duration-300 ease-in-out px-4 py-1 rounded-2xl block'>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/course" className='hover:bg-white hover:text-black hover:scale-105 transition-transform duration-300 ease-in-out px-4 py-1 rounded-2xl block'>
                                Courses
                            </Link>
                        </li>
                        <li>
                            <Link to="/about" className='hover:bg-white hover:text-black hover:scale-105 transition-transform duration-300 ease-in-out px-4 py-1 rounded-2xl block'>
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link to="/pricing" className='hover:bg-white hover:text-black hover:scale-105 transition-transform duration-300 ease-in-out px-4 py-1 rounded-2xl block'>
                                Pricing
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Law Column */}
                <div className='flex flex-col items-center text-center'>
                    <h3 className='font-bold bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent md:shadow-xl mb-2'>Law</h3>
                    <ul className='space-y-2'>
                        <li>
                            <Link to="/privacy" className='hover:bg-white hover:text-black hover:scale-105 transition-transform duration-300 ease-in-out px-4 py-1 rounded-2xl block'>
                                Privacy
                            </Link>
                        </li>
                        <li>
                            <Link to="/refund" className='hover:bg-white hover:text-black hover:scale-105 transition-transform duration-300 ease-in-out px-4 py-1 rounded-2xl block'>
                                Refund
                            </Link>
                        </li>
                        <li>
                            <Link to="/terms" className='hover:bg-white hover:text-black hover:scale-105 transition-transform duration-300 ease-in-out px-4 py-1 rounded-2xl block'>
                                Terms
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Social Media Column */}
                <div className='flex flex-col items-center text-center'>
                    <h3 className='font-bold bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent md:shadow-xl mb-2'>Social Media</h3>
                    <ul className='space-y-2'>
                        <li>
                            <Link to="/insta" className='flex items-center gap-2 hover:bg-white hover:text-black hover:scale-105 transition-transform duration-300 ease-in-out px-4 py-1 rounded-2xl'>
                                <FaInstagram /> Instagram
                            </Link>
                        </li>
                        <li>
                            <Link to="#" className='flex items-center gap-2 hover:bg-white hover:text-black hover:scale-105 transition-transform duration-300 ease-in-out px-4 py-1 rounded-2xl'>
                                <MdWhatsapp /> WhatsApp
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

            <div className='bg-black rounded-2xl m-2 text-white'>
                <h3 className='text-center font-bold hover:scale-105 transition-transform duration-300 animate-pulse ease-in-out py-2'>
                    &copy; Copyright All Rights Reserved
                </h3>
            </div>
        </div>
    )
}

export default Footer
