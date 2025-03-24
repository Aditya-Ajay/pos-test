import React, { useState } from 'react';
import { MoveRight } from 'lucide-react';
import signinImage from "../assets/signin.png"
import logo from "../assets/logo_img.png"
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { handleSignIn } from '../redux/SignIn/SignInSlice.jsx';

const BASE_URL = import.meta.env.VITE_BASE_URL


function App() {
  const [email, setEmail] = useState('');
  const token = useSelector((state)=>state?.signin.token)
  const dispatch = useDispatch()

  const [password, setPassword] = useState('');
// credential of the sign in function 
  const credentials = {
    email : email ,
    password : password
  }
  const handleSubmit = (e , id)=>{
    e.preventDefault()
    dispatch(handleSignIn(credentials))
  }

  return (
    <div className="min-h-screen bg-white flex">
      {/* Left Side - Login Form */}
      <div className="w-full lg:w-1/2 flex flex-col p-8 lg:p-16">
        {/* Logo */}
        <div className="mb-16">
          <div className="flex items-center">
            <img src={logo} alt="" width={80} />
            {/* <div className="h-8 w-4 bg-indigo-600 transform -skew-x-12"></div> */}
            {/* <div className="h-8 w-4 bg-orange-500 transform -skew-x-12 ml-0.5"></div> */}
          </div>
        </div>

        {/* Login Form */}
        <div className="flex-1 flex flex-col justify-center max-w-md">
          <form onSubmit={(e)=>{handleSubmit(e , credentials)}} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-lg font-medium text-gray-700">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Email Address"
                className="mt-2 block w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-lg font-medium text-gray-700">
                Password
              </label>
              <input
                id="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter Password"
                className="mt-2 block w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
              />
              <a href="#" className="block mt-2 text-indigo-600 hover:text-indigo-500">
                Forgot Password?
              </a>
            </div>

            <button
              type="submit"
              onClick={handleSubmit}
              className="w-30 flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 transition duration-150 ease-in-out ml-auto"
            >
              Log In
              <MoveRight className="ml-2 h-5 w-5" />
            </button>
          </form>

          {/* Footer */}
          <footer className="mt-auto pt-16">
            <nav className="flex space-x-4 text-sm text-gray-500">
              <a href="#" className="hover:text-gray-700">Help</a>
              <a href="#" className="hover:text-gray-700">Contact US</a>
            </nav>
          </footer>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="hidden lg:block w-1/2 relative">
        <img
          src={signinImage}
          alt="Office workspace"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
      </div>
    </div>
  );
}

export default App;