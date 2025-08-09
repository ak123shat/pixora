import React from 'react'

const UserCard = () => {
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
    <div className='p-4 pt-6 flex flex-col justify-between w-72 shadow border border-gray-200 rounded-md'>
      
    </div>
  )
}

export default UserCard
