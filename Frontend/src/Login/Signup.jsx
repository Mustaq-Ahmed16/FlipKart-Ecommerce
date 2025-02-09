import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const clearInput = () => {
    setEmail('');
    setUsername('');
    setPassword('');
  }

  const handleSubmit = async (e) => {
    e.preventDefault(); // Fixed typo here
    try {
      const payload = {
        username: username,
        email: email,
        password: password,
      }
      const res = await axios.post("http://localhost:8002/signup", payload);
      console.log(res.data);
      if (res.data.status === "ok") {
        const token = res.data.token;
        localStorage.setItem("token", token);
        localStorage.setItem('userId',res.data.user.userId)
        alert('Successfully signed up!');
        clearInput();
        navigate('/'); // Optionally, navigate to login page after success
      }
    } catch (err) {
      alert('Internal server error');
    }
  }

  return (
    <div className="w-full flex mx-20 mt-20">
      <div className="w-5/12 h-120 py-12 bg-blue-500 ml-60 flex flex-column">
        <div className='min-h-full flex-col justify-center px-6 py-0 lg:px-8'>
          <div className='mb-5 text-3xl text-white font-bold'>Looks like you're new here!</div>
          <div className='mb-35 text-xl text-gray-300'>Sign up with your mobile number to get started</div>
          <div>
            <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/login_img_c4a81e.png" alt="" />
          </div>
        </div>
      </div>
      <div className="w-8/12 h-120 py-2 bg-white-500 mr-100">
        <div className="flex min-h-full flex-col justify-center px-6 py-0 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="text-center text-2xl/9 font-bold tracking-tight text-gray-900">Signup to your account</h2>
          </div>

          <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="username" className="block text-sm/6 font-medium text-gray-900">Username</label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="username"
                    id="username"
                    autoComplete="username"
                    required
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)} // Added onChange handler
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">Email address</label>
                <div className="mt-2">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    required
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} // Added onChange handler
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">Password</label>
                </div>
                <div className="mt-2">
                  <input
                    type="password"
                    name="password"
                    id="password"
                    autoComplete="current-password"
                    required
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} // Added onChange handler
                  />
                </div>
              </div>
              <div>
                <p className="mt-5 text-center text-sm/6 text-gray-500">
                  By continuing, you agree to Flipkart's
                  <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">Terms of Use and Privacy Policy.</a>
                </p>
              </div>

              <div>
                <button type="submit" className="flex w-full justify-center rounded-md bg-orange-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-orange-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600">Sign up</button>
              </div>
            </form>
            <div>
              <button onClick={() => navigate('/login')} className="flex w-full justify-center rounded-md bg-white-600 px-3 py-1.5 text-sm/6 font-semibold text-blue shadow-2xl hover:bg-white-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white-600">Existing User? Log in</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup;
