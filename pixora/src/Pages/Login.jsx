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
            <div className='flex items-center gap-3 mb-4 max-md:mt-10'>
                <img src={groupUsers} alt="groupusers" className='h-8 md:h-10' />
                <div>
                    <div className='flex'>
                        {Array(5).fill(0).map((_ , i)=>(<Star key={i} 
                        className='size-4 md:size-4.5 text-transparent fill-amber-500'/>))}
                    </div>
                    <p>Used By 12K+ developers</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Login
