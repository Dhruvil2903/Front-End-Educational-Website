import React, { useContext, useState } from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import nurse from '../assets/Nurse.jpg'
import { useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from '../Context/AuthContext'
const Login = () => {
  const navigate = useNavigate('');
  const { setLogin } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const location = useLocation();

    const from = location.state?.from?.pathname || '/dashboard'; 
  function handleSubmit(e) {
    e.preventDefault();

    fetch("http://localhost:8081/api/auth/getLogin", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        userName: username,
        password: password
      })
    })
      .then( response => {
        if (!response.ok) {
          throw new Error(`http error! status : ${response.status}`)
        }
     
        setLogin(true);
        setMessage("Login Successfull");
         navigate(from, { replace: true });
        console.log(`Login successfull and status is : ${response.status}`);
       
        return response.text();
      })
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        setError("Login failed");
        console.log('Error fetching data :', error)
      })

  };
  return (
    <>

      <Navbar />

      <div className='grid grid-cols-1 md:grid-cols-2 m-15 bg-gray-50 justify-center text-center rounded-2xl p-4 border h-auto w-auto max-w-6xl mx-auto shadow-xl'>
        <div className=' flex flex-col  m-1 justify-center align p-4 w-full bg-white shadow-2xl rounded-2xl text-black'>
          <h2 className='font-bold '>Welcome</h2>
          <p className='text-black'>Login here</p>
          <form onSubmit={handleSubmit} className='max-w-xl ' action="">
            <label className='m-2' htmlFor='username'>E-Mail:</label><br />
            <input className='border p-2 m-2 rounded text-black' value={username} onChange={(e) => { setUsername(e.target.value) }} type='email' placeholder='Enter your username' /><br />
            <label className='m-2' htmlFor='password'>Password:</label><br />
            <input className='border p-2 m-2 rounded text-black' value={password} onChange={(e) => { setPassword(e.target.value) }} type='password' placeholder='Enter your password' /><br />
            <button className='border bg-blue-700 text-white m-2 rounded-2xl p-2 hover:bg-white hover:text-black hover:shadow-xl hover:scale-105 transition-transform duration-300 ease-in-out' type='submit'>Submit</button>
            <h3 className='m-2'>Don't have an account <a className='text-blue-400 hover:text-blue-800 hover:scale-105 hover:transition-transform duration-300 ease-in-out' href="/register">Register</a> here!</h3>
          </form>
          {message && (
            <p className='text-green-600 font-semibold'>{message}</p>
          )}
          {error && <p className='text-red-700'>{error}</p>}
        </div>
        <img className='w-full h-auto m-2 bg-red-300 rounded-2xl p-4 ' src={nurse} alt="Nurse Image" />
      </div>
      <div>

        <Footer />
      </div>
    </>
  )
}

export default Login