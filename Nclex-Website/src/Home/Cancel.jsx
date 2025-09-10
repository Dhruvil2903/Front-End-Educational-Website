import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const Cancel = () => (
  <>
    <Navbar />
    <div className="flex flex-col justify-center items-center h-screen bg-red-100">
      <h1 className="text-4xl font-bold mb-4">Payment Cancelled</h1>
      <p className="text-xl">Your payment was cancelled. You can try again.</p>
    </div>
    <Footer />
  </>
);

export default Cancel;
