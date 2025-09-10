import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51S5rkNJFUmUGDHexf1tBJQH67xikHAM9jxWfrXNEL8Njz8khJSp7wTIVA1CulLxGaOJ5xFqViZITAJWF0ySmlWqd00HJQj2Kqf');

const Pricing = () => {
  const plans = [
    {
      name: "Self Study",
      price: 900,
      currency: "CAD",
      features: [
        "Self study",
        "4 Months validity",
        "Complete on your own pace",
        "2 support sessions",
        "Question and answer"
      ]
    },
    {
      name: "Online Session",
      price: 1400,
      currency: "CAD",
      features: [
        "Online Session",
        "6 Months validity",
        "Weekly support session",
        "10 support sessions",
        "Question and answer"
      ]
    },
    {
      name: "Live Session + Job Support",
      price: 2000,
      currency: "CAD",
      features: [
        "Live session",
        "Job placement guidance",
        "Weekly support session",
        "Unlimited support sessions",
        "Question and answer"
      ]
    }
  ];

  const handlePayment = async (plan) => {
    try {
      // 1️⃣ Create checkout session in backend
      const response = await fetch("http://localhost:8082/api/payment/create-checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: plan.price,
          currency: plan.currency,
          name: plan.name
        })
      });

      const data = await response.json();
      const stripe = await stripePromise;

      // 2️⃣ Redirect to Stripe Checkout
      const result = await stripe.redirectToCheckout({
        sessionId: data.id
      });

      if (result.error) {
        alert(result.error.message);
      }
    } catch (error) {
      console.error("Payment error:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col bg-black justify-center items-center py-10 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl">
          {plans.map((plan, index) => (
            <div key={index} className="bg-gray-300 p-6 rounded-2xl shadow-2xl text-black">
              <h2 className="text-xl font-semibold bg-gradient-to-r from-blue-700 to-black bg-clip-text text-transparent mb-4 text-center">
                Price for NCLEX-RN
              </h2>

              <ul className="space-y-2 font-semibold border border-black rounded-xl p-4">
                <p className="text-black font-semibold">What includes?</p>
                <hr className="border-black" />
                {plan.features.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>

              <div className="flex justify-center mt-10">
                <button
                  className="border-2 border-blue-700 bg-black text-green-300 py-3 px-6 rounded-xl font-semibold text-xl hover:border hover:border-lime-700 hover:scale-105 transition-transform duration-300 ease-in-out shadow-2xl cursor-pointer"
                  onClick={() => handlePayment(plan)}
                >
                  ${plan.price} {plan.currency}
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
