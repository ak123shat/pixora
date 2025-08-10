import React, {useState} from 'react'
import SideBar from '../Components/SideBar'
import { Outlet } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import Loading from '../Components/Loading'

const Layout = () => {
  const user = dummyUserData;
  const [sidebarOpen, setSidebarOpen] = useState(false); 

  return user ? (
    <div className='w-full flex h-screen'> 

      <SideBar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      <div className='flex-1 bg-gray-100'>
        <Outlet /> 
      </div>
      {
        sidebarOpen ?
        <X className='absolute top-4 right-4 p-2 z-100 bg-white rounded-md shadow w-10 h-10 text-gray-600 sm:hidden' onClick={() => setSidebarOpen(false)} />
        :
        <Menu className='absolute top-4 right-4 p-2 z-100 bg-white rounded-md shadow w-10 h-10 text-gray-600 sm:hidden' />
      }
    </div>
  ) : (
    <Loading />
  )
}

export default Layout
