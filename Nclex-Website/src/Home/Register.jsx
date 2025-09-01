import React, { use, useState } from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import nurse from '../assets/Nurse.jpg'
const Register = () => {
  const [username, setusername] = useState('');
  const [password, setpassword] = useState('');
  const [error, seterror] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:8081/api/auth/register", {
      method: "POST",
      headers: {

        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        userName: username,
        password: password
      })
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`Status:  ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        console.log("Success", data);
      })
      .catch(error => {
        console.log('Error', error);
      })
  }


  return (
    <>

      <Navbar />

      <div className='grid grid-cols-1 md:grid-cols-2 m-15 bg-black justify-center p-4 text-center rounded-2xl border border-white h-auto w-auto max-w-6xl mx-auto shadow-xl'>
        <div className=' flex flex-col  m-1 justify-center align p-4 w-full bg-black shadow-2xl rounded-2xl'>
          <h2 className='font-bold text-white'>Welcome</h2>
          <p className='bg-gradient-to-r from-purple-400 to-orange-400 bg-clip-text text-transparent '>Register here</p>
          <form onSubmit={handleSubmit} className='max-w-xl' action="">
            <label className='m-2 bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent ' htmlFor='username'>E-Mail:</label><br />
            <input className='border-white border text-white p-2 m-2 rounded' type='text' value={username} onChange={(e) => { setusername(e.target.value) }} placeholder='Enter your E-Mail' /><br />
            <label className='m-2 bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent ' htmlFor='password'>Password:</label><br />
            <input className='border-white border text-white  p-2 m-2 rounded' type='password' value={password} onChange={(e) => { setpassword(e.target.value) }} placeholder='Enter your password' /><br />
            <button className='border text-white m-2 rounded-2xl p-2 hover:bg-white hover:text-black hover:shadow-xl hover:scale-105 transition-transform duration-300 ease-in-out'>Submit</button>
            <h3 className='m-2 bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent '>Don't have an account <a className='text-blue-400' href="/login">Login</a> here!</h3>
          </form>
        </div>
        {error && <p>{error}</p>}
        <img className='w-full h-auto object-cover p-4 bg-red-300 rounded-2xl m-2' src={nurse} alt="Nurse Image" />
      </div>
      <div>

        <Footer />
      </div>
    </>
  )
}

export default Register