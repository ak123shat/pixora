import { Search } from 'lucide-react';
import React , {useState} from 'react'
import UserCard from '../Components/UserCard';
import Loading from '../Components/Loading';

const Discover = () => {
  const [input , setInput] = useState('');
  const[users , setUsers] = useState(dummyConnectionData);
  const[loading , setLoading] = useState(false);

  const handleSearch = async (e) => {
    if(e.key === 'Enter'){
      setUsers([])
      setLoading(true);
      setTimeout(() => {
        const filteredUsers = dummyConnectionData.filter(user => user.full_name.toLowerCase().includes(input.toLowerCase()));
        setUsers(filteredUsers);
        setLoading(false);
      }, 1000);
    }
  }

  return (
    <div className='min-h-screen bg-gradient-to-b from-slate-50 to-white'>
      <div className='max-w-6xl mx-auto p-6'> 
        <div className='mb-8'>
          <h1 className='text-3xl font-bold text-slate-800 mb-2'>Discover People</h1>
          <p className='text-slate-600'>Connect with amazing people and grow your network.</p>
        </div>

        <div className='mb-8 shadow-md rounded-md border border-slate-200/60 bg-white/80'>
          <div className='p-6'>
            <div className='relative'>
              <Search  className='absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5'/>
              <input type='text' placeholder='Search for people...' className='pl-12 sm:pl-12 py-2 w-full  border border-gray-300 rounded-md max-sm:text-sm'
              onChange={(e) => setInput(e.target.value)}
              value={input}
              onKeyUp={handleSearch}
              />
            </div>
          </div>
        </div>

        <div className='felx flex-wrap gap-6'>
          {users.map((user)=>(
            <UserCard key={user._id} user={user} />
          ))}
        </div>
        {loading && (<Loading height='60vh' />)}
      </div>
    </div>
  )
}

export default Discover
