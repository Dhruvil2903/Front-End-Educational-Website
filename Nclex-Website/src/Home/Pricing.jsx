import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const Pricing = () => {
  const plans = [
    {
      price: "$900 CAD",
      features: [
        "Self study",
        "4 Months validity",
        "Complete on your own pace",
        "Weekly support session",
        "2 support sessions",
        "Question and answer"
      ]
    },
    {
      price: "$1400 CAD",
      features: [
        "Online Session",
        "6 Months validity",
        "Weekly support session",
        "10 support sessions",
        "Question and answer"
      ]
    },
    {
      price: "$2000 CAD",
      features: [
        "Live session",
        "Job placement guidance",
        "Weekly support session",
        "Unlimited support sessions",
        "Question and answer"
      ]
    }
  ];

  return (
    <>
      <Navbar />
      <div className='flex flex-col bg-gray-50 justify-center items-center py-10 px-4'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl'>

          {plans.map((plan, index) => (
            <div key={index} className='bg-gray-800 p-6 rounded-2xl shadow-2xl text-white transform transition-transform duration-300 ease-in-out hover:scale-105 hover:border hover:border-white'>
              <h2 className='text-xl font-semibold bg-gradient-to-r from-blue-700 to-white bg-clip-text text-transparent mb-4 text-center'>
                Price for Nclex-RN
              </h2>

              <ul className='space-y-2 font-semibold border border-white rounded-xl p-4'>
                <p className='text-white font-semibold'>What includes?</p>
                <hr className="border-white" />
                {plan.features.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>

              <div className='flex justify-center mt-8'>
                <button className='bg-gradient-to-r text-black from-blue-700 to-white py-3 px-6 rounded-xl font-semibold text-xl hover:border hover:border-white hover:scale-105 transition-transform duration-300 ease-in-out shadow-2xl cursor-pointer'>

                  {plan.price}
                </button>
              </div>
            </div>
          ))}

        </div>
      </div>
      <Footer />
    </>
  );
};

export default Pricing;
