import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import MenuItem from './MenuItem';

const SideBar = ({sidebarOpen, setSidebarOpen}) => {
    const navigate = useNavigate();
  return (

    <div className={`w-60 xl:w-72 bg-white border-r border-gray-200 flex flex-col justify-between items-center max-sm:absolute top-0 bottom-0 z-20
    ${sidebarOpen ? 'translate-x-0' : 'max-sm:-translate-x-full'} transition-all duration-300 ease-in-out`}>

      <div className='w-full'>

        <img onClick={()=> navigate('/')} src={logo} alt="Logo" className='w-26 ml-7 my-2 cursor-pointer' />

        <hr className='border-gray-300 mb-8' />
        <MenuItem setSidebarOpen={setSidebarOpen} />
        <Link>
        
        </Link>

      </div>
    </div>
  )
}

export default SideBar
