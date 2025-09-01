import React, { useContext, useState } from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import nurse from '../assets/Nurse.jpg'
import { useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from '../Context/AuthContext'
import Loader from '../Components/Loader'

const Login = () => {
  const navigate = useNavigate('');
  const { setLogin } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  const from = location.state?.from?.pathname || '/dashboard';
  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

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
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        console.log(data);

        localStorage.setItem("userName", data.userName);
        localStorage.setItem("token", data.token);
        setLogin(true);
        setMessage("Login Successful");
        navigate(from, { replace: true });
      })
      .catch(error => {
        setError("Login failed");
        console.log("Error fetching data:", error);
      })
      .finally(() => {
        setLoading(false); // End loading
      });;
  };
  return (
    <>
      {loading && <Loader />}
      <Navbar />

      <div className='grid grid-cols-1 md:grid-cols-2 m-15 border-white bg-black justify-center text-center rounded-2xl p-4 border h-auto w-auto max-w-6xl mx-auto shadow-xl'>
        <div className=' flex flex-col  m-1 justify-center align p-4 w-full bg-black shadow-2xl rounded-2xl text-black'>
          <h2 className='font-bold text-white '>Welcome</h2>
          <p className='bg-gradient-to-r from-purple-400 to-orange-400 bg-clip-text text-transparent '>Login here</p>
          <form onSubmit={handleSubmit} className='max-w-xl ' action="">
            <label className='m-2 font-semibold bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent ' htmlFor='username'>E-Mail:</label><br />
            <input className='border-2 p-2 m-2 rounded text-white ' value={username} onChange={(e) => { setUsername(e.target.value) }} type='text' placeholder='Enter your username' /><br />
            <label className='m-2 font-semibold bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent ' htmlFor='password'>Password:</label><br />
            <input className='border-2 p-2 m-2 rounded text-white' value={password} onChange={(e) => { setPassword(e.target.value) }} type='password' placeholder='Enter your password' /><br />
            <button
              className='border text-white m-2 rounded-2xl p-2 hover:bg-white hover:text-black hover:shadow-xl hover:scale-105 transition-transform duration-300 ease-in-out disabled:opacity-50'
              type='submit'

            >
              Login
            </button>

            <h3 className='m-2 bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent '>Don't have an account <a className='text-blue-400 hover:text-blue-800 hover:scale-105 hover:transition-transform duration-300 ease-in-out' href="/register">Register</a> here!</h3>
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