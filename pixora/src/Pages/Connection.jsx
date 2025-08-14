import React from 'react'
import {Users , UserPlus , UserCheck , UserRoundPen , MessageSquare } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
// import dummyConnectionData from '../dummyData/dummyConnectionData'

const Connection = () => {
  const [currentTab, setCurrentTab] = React.useState('Followers');
  const navigate = useNavigate();
  const dataArray =[
    {label: 'Followers', value: dummyConnectionData.followers.length , icon: <Users className='w-4 h-4' />},
    {label: 'Following', value: dummyConnectionData.following.length, icon: <UserCheck className='w-4 h-4' />},
    {label: 'Pending', value: dummyConnectionData.pending.length, icon: <UserRoundPen className='w-4 h-4' />},
    {label: 'Connections', value: dummyConnectionData.requests.length, icon: <UserPlus className='w-4 h-4' />}
  ]
  return (
    <div className='min-h-screen bg-slate-50'>
        <div className='max-w-6xl mx-auto p-6'>
          <div className='mb-8'>
            <h1 className='text-3xl font-bold text-slate-800 mb-2'>Connection</h1>
            <p className='text-slate-600'>Manage your connections and stay in touch with people.</p>
          </div>

          <div className='mb-8 flex flex-wrap gap-8'>
            {dataArray.map((item, index) => (
              <div key={index} className='flex flex-col items-center justify-center gap-1 border h-20 w-40 border-gray-200 bg-white rounded-md shadow'>
                {item.icon}
                <div>
                  <p className='text-sm text-gray-500'>{item.label}</p>
                  <p className='text-lg font-semibold text-gray-800'>{item.value}</p>
                </div>
              </div>
            ))}
          </div>

          <div className='inline-flex flex-wrap items-center border border-gray-200 rounded-md p-1 bg-white shadow-sm'>
            {dataArray.map((tab)=>(
              <button onClick={() => setCurrentTab(tab.label)} key={tab.label} className={` cursor-pointer flex items-center px-3 py-1 text-sm rounded-md transitions-colors ${currentTab === tab.label ? 'bg-white font-medium text-black' : 'text-gray-600 hover:text-black'}`}>
                <tab.icon className='w-4 h-4' />
                <span className='ml-1'>{tab.label}</span>
                {tab.count !== undefined && <span className='ml-2 text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full'>({tab.count})</span>}
              </button>
            ))}
          </div>

          {/* Connection Details */}
          <div className='flex flex-wrap gap-6 mt-6'>
            {dataArray.find((item) => item.label === currentTab).value.map((user) => (
              <div key={user._id} className='w-full max-w-88 flex gap-5 p-6 bg-white shadow rounded-md'>
                <img src={user.profile_picture} alt={user.name} className='rounded-full w-12 h-12 shadow-md mx-auto' />
                <div className='flex-1'>
                  <p className='font-medium text-gray-800'>{user.full_name}</p>
                  <p className='text-gray-500'>@{user.username}</p>
                  <p className='text-sm text-gray-500'>{user.bio.slice(0 , 30)}...</p>
                  <p className='text-xs text-gray-400'>Joined {new Date(user.createdAt).toLocaleDateString()}</p>
                  <div className='flex max-sm:flex-col gap-2 mt-4'>
                    {
                      <button onClick={() => navigate(`/profile/${user._id}`)} className='w-full p-2 text-sm rounded bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 active:scale-95 transition text-white cursor-pointer'>
                        View Profile
                      </button>
                    }
                    {
                      currentTab === 'Following' && (
                        <button onClick={() => navigate(`/profile/${user._id}`)} className='w-full p-2 text-sm rounded bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 active:scale-95 transition text-white cursor-pointer'>
                          Unfollow
                        </button>
                      ) 
                    }
                    {
                      currentTab === 'Pending' && (
                        <button onClick={() => navigate(`/profile/${user._id}`)} className='w-full p-2 text-sm rounded bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 active:scale-95 transition text-white cursor-pointer'>
                          Accept
                        </button>
                      ) 
                    }
                    {
                      currentTab === 'Connections' && (
                        <button onClick={() => navigate(`/messages/${user._id}`)} className='w-full p-2 text-sm rounded bg-slate-100 hover:bg-slate-200 text-slate-900 active:scale-95 transition cursor-pointer flex items-center justify-center gap-1'>
                          <MessageSquare className='w-4 h-4'/>
                          Message
                        </button>
                      ) 
                    }
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
    </div>
  )
}

export default Connection
