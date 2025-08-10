import { MapPin, MessageCircle, Plus, UserPlus } from 'lucide-react';
import React from 'react'

const UserCard = ({user}) => {
    const currentUser = {
        id: 1,
        full_name: "John Doe",
        username: "johndoe",
        bio: "Web Developer",
        location: "San Francisco, CA",
        website: "https://johndoe.com",
        avatar: "https://i.pravatar.cc/150?img=1"
    };
    const handleFollow = () => {
        console.log(`Followed ${currentUser.username}`);
    };
    const handleConnectionRequest = () => {
        console.log(`Sent a connection request to ${currentUser.username}`);
    };
  return (
    <div key={user._id} className='p-4 pt-6 flex flex-col justify-between w-72 shadow border border-gray-200 rounded-md'>
      <div className='text-center'>
        <img src={user.profile_picture} alt={user.full_name} className='rounded-full w-16 shadow-md mx-auto' />
        <p className='mt-4 font-semibold'>{user.full_name}</p>
        {user.username && <p className='text-sm text-gray-500'>@{user.username}</p>}
        {user.bio && <p className='text-gray-600 mt-2 text-center text-sm px-4'>{user.bio}</p>}
      </div>
      <div className='flex items-center justify-center gap-2 mt-4 text-xs text-gray-600'>
        <div className='flex items-center gap-1 border border-gray-300 rounded-full px-3 py-1'>
          <MapPin className='w-4 h-4'/> {user.location}
        </div>
        <div className='flex items-center gap-1 border border-gray-300 rounded-full px-3 py-1'>
          <span>{user.followers.length}</span> Followers
        </div>
      </div>

      <div className='mt-4 flex gap-2'>
        <button onClick={handleFollow} disabled={currentUser?.following.includes(user._id)} className='w-full py-2 rounded-md flex justify-center items-center gap-2 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 active:scale-95 transition text-white cursor-pointer'>
          <UserPlus className='w-4 h-4' /> {currentUser?.following.includes(user._id) ? 'Following' : 'Follow'}
        </button>
        <button onClick={handleConnectionRequest} className='flex items-center justify-center w-16 border border-slate-500 rounded-md cursor-pointer active:scale-95 transition'>
          {
            currentUser?.connections.includes(user._id) ? 
            <MessageCircle className='w-4 h-4 group-hover:scale-105 transition' /> : 
            <Plus className='w-4 h-4 group-hover:scale-105 transition' />
          }
        </button>
      </div>
    </div>
  )
}

export default UserCard
