import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const Success = () => (
  <>
    <Navbar />
    <div className="flex flex-col justify-center items-center h-screen  text-white bg-black">
      <h1 className="text-4xl font-bold mb-4 animate-bounce">Payment Successful!</h1>
      <p className="text-xl ">Thank you for your purchase. Your payment has been processed successfully.</p>
    </div>
    <Footer />
  </>
);

export default Success;
