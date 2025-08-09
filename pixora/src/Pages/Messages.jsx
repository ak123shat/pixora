import { Eye, MessageSquare } from 'lucide-react'
import React  from 'react'
import { useNavigate } from 'react-router-dom';

const Messages = () => {
  const navigate = useNavigate();

  return (
    <div className='min-h-screen relative bg-slate-100'>
      <div className='max-w-6xl max-auto p-6'>
        {/* Title */}
        <div className='mb-8'>
          <h1 className='text-3xl font-bold text-slate-800 mb-2'>Messages</h1>
          <p className='text-slate-600'>Talk to your friends and family in real-time.</p>
        </div>

        {/* Connected Users */}
        <div className='flex flex-col gap-4'>
          {dummyConnectionData.map((user)=>(
            <div key={user._id} className=' max-w-xl flex flex-wrap gap-5 p-6 bg-white rounded-md shadow'>
              <img src={user.profile_picture} alt={user.full_name} className=' rounded-full size-12 mx-auto' />
              <div className='flex-1'>
                <h2 className='text-xl font-semibold'>{user.name}</h2>
                <p className='text-gray-500'>@{user.username}</p>
                <p className='text-gray-600 text-sm'>{user.bio}</p>
              </div>
              <div className='flex flex-col gap-2 mt-4'>
                <button onClick={() => navigate(`/messages/${user._id}`)} className='size-10 flex items-center justify-center text-sm rounded bg-slate-100 hover:bg-slate-200 text-slate-800 active:scale-95 transition cursor-pointer gap-1'>
                  <MessageSquare className='w-4 h-4' />
                </button>
                <button onClick={() => navigate(`/profile/${user._id}`)} className='size-10 flex items-center justify-center text-sm rounded bg-slate-100 hover:bg-slate-200 text-slate-800 active:scale-95 transition cursor-pointer'>
                  <Eye className='w-4 h-4' />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Messages
