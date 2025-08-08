import React from 'react'
import { useNavigate } from 'react-router-dom';



const SignUp = () => {
    const navigate = useNavigate();
    console.log("hi from SignUp")
  return (
    <div className='flex-1 flex items-center justify-center p-6 md:p-10'> 
        <div className='bg-pink-500 backdrop-blur-md rounded-lg p-8 w-full max-w-md'>
        <h2 className='text-2xl font-bold text-white mb-6 text-center'>Sign Up</h2>
     
          <div>
            <input 
              type="text" 
              placeholder="Username" 
              className='w-full p-3 rounded-lg bg-white/20 text-white placeholder-white border border-white/20 focus:outline-none focus:border-white/40'
            />
          </div>
          <div>
            <input 
              type="email" 
              placeholder="Email" 
              className='w-full p-3 rounded-lg bg-white/20 text-white placeholder-white border border-white/20 focus:outline-none focus:border-white/40'
            />
          </div>
          <div>
            <input 
              type="password" 
              placeholder="Password" 
              className='w-full p-3 rounded-lg bg-white/20 text-white placeholder-white border border-white/20 focus:outline-none focus:border-white/40'
            />
          </div>
          <button 
            type="submit" 
            className='w-full bg-white/20 hover:bg-white/30 text-white font-semibold py-3 px-4 rounded-lg transition duration-200'
            onClick={()=>{
              navigate('/');

            }}
            
          >
            Sign Up
          </button>
        
        <p className='text-white/70 text-center mt-4'>
          Already have an account? <a href="/login" className='text-white hover:text-white'>Login</a>
        </p>
      </div>
      
    </div>
  )
}

export default SignUp
