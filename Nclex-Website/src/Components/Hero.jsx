import React from 'react'
import NursingHome from '../assets/NurseingHome.svg';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <div className='flex justify-center p-4 '>
            <div className='flex flex-col md:flex-row items-center gap-6 bg-white h-auto justify-center shadow-2xl border-gray-200 rounded-3xl p-6 max-w-5xl w-full'>
                <div className='flex-1 space-y-4'>
                    <h1 className='text-2xl md:text-3xl font-semibold text-gray-800'>Welcome to <span className='bg-gradient-to-r from-blue-500 to-blue-300 text-amber-100 font-bold'>PULSEPOINT</span> </h1>
                    <p className='text-gray-600 text-lg leading-relaxed'>This is the website for your better future. Prepare smarter, pass faster with our expert-guided NCLEX-RN classes.</p>
                    <div className='overflow-hidden whitespace-nowrap'>
                        <p className='text-red-700 font-semibold animate-pulse'>🚀Learn Smart, Pass Fast🚀</p>
                    </div>
                    <Link to={"/"}

                        className="group inline-flex items-center text-green-600 hover:text-green-800 font-medium transition-all duration-300"
                    >
                        About Us
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                            aria-hidden="true"
                        >
                            <path d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                        </svg>
                    </Link>
                </div>
                <div className="flex flex-col items-center bg-gradient-to-br from-blue-600 to-indigo-400 p-4 rounded-2xl text-white shadow-lg w-full md:w-[300px]">
                    <img
                        src={NursingHome}
                        alt="Stethoscope"
                        className="w-[300px] h-[200px] object-cover mb-4 drop-shadow-lg"
                    />
                    <p className="text-center text-white text-lg font-semibold">
                        Know more about us by clicking link 👈🏻
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Hero