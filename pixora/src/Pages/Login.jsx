import React from 'react'
import bgImage from '../assets/bgImage.jpg';
import logo from '../assets/logo.png';

const Login = () => {
  return (
    <div className='min-h-screen flex flex-col md:flex-row'>
      <img src={bgImage} alt="background Image" className='absolute top-0 left-0 -z-1 w-full h-full object-cover'/>

      {/* LeftSide: Branding */}
      <div className='flex-1 flex flex-col item-start justify-between p-6 md:p-10 lg:pl-40'>
        <img src={logo} alt="logo" className='h-12 object-contain' />
        <div>
          <h1 className='text-4xl font-bold text-white mb-4'>Welcome to Pixora</h1>
          <p className='text-white text-lg mb-8'>Connect with developers around the world</p>
        </div>
      </div>

      {/* RightSide: Login Form */}
      <div className='flex-1 flex items-center justify-center p-6 md:p-10'>
        <div className='bg-white/10 backdrop-blur-md rounded-lg p-8 w-full max-w-md'>
          <h2 className='text-2xl font-bold text-white mb-6 text-center'>Sign In</h2>
          <form className='space-y-4'>
            <div>
              <input 
                type="email" 
                placeholder="Email" 
                className='w-full p-3 rounded-lg bg-white/20 text-white placeholder-white/70 border border-white/20 focus:outline-none focus:border-white/40'
              />
            </div>
            <div>
              <input 
                type="password" 
                placeholder="Password" 
                className='w-full p-3 rounded-lg bg-white/20 text-white placeholder-white/70 border border-white/20 focus:outline-none focus:border-white/40'
              />
            </div>
            <button 
              type="submit" 
              className='w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition duration-200'
            >
              Sign In
            </button>
          </form>
          <p className='text-white/70 text-center mt-4'>
            Don't have an account? <a href="#" className='text-blue-400 hover:text-blue-300'>Sign up</a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login
