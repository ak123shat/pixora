import React from 'react'
import bgImage from '../assets/bgImage.jpg';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom'
import { SignIn } from '@clerk/clerk-react';

const Login = () => {
  return (
    <div className='min-h-screen flex flex-col md:flex-row'>
      <img src={bgImage} alt="background Image" className='absolute top-0 left-0 -z-1 w-full h-full object-cover'/>
      <p className='text-blue-400 text-5xl font-bold absolute top-15.5 left-135 transform -translate-x-1/2 -translate-y-1/2'>Pixora</p>

      {/* LeftSide: Branding */}
      <div className='flex-1 flex flex-col item-start justify-between p-6 md:p-10 lg:pl-40'>
        <img src={logo} alt="logo" className='h-12 object-contain' />
        <div>
          <h1 className='text-5xl font-bold text-blue-500 mb-4'>Welcome to Pixora</h1>
          <p className='text-blue-400 text-xl mb-8'>Connect with developers around the world</p>
        </div>
      </div>

      {/* RightSide: Login Form */}
      <div className='flex-1 flex items-center justify-center p-6 md:p-10'>
        <SignIn />
      </div>
    </div>
  )
}

export default Login
