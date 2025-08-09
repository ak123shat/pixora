import React, {useEffect, useState} from 'react'
import Loading from '../Components/Loading';
import StoriesBar from '../Components/StoriesBar';
import PostCard from '../Components/PostCard';
import RecentMessages from '../Components/RecentMessages';

const Feed = () => {
  const [feeds, setFeeds] = useState([]); // Assuming feeds will be fetched or passed as props
  const [loading , setLoading] = useState(true);
  const fetchFeeds = async () => {
    setFeeds(dummyPostData); // Replace with actual data fetching logic
    setLoading(false); // Set loading to false after fetching data
  };

  useEffect(()=>{
    fetchFeeds();
  } , [])

  return !loading ?(
    <div className='h-full overflow-y-scroll no-scrollbar py-10 xl:pr-5 flex items-start justify-center xl:gap-8'>
      {/* Story and Post Lists */}
      <div>
        <StoriesBar />
        <div className='p-4 space-y-6'>
          {feeds.map((post) => (
            <PostCard key={post._id} post={post} />
          ))}
        </div>
      </div>
      {/* RightSide bar */}
      <div className='max-xl:hidden sticky top-0'>
        <div className='max-w-xs bg-white text-xs p-4 rounded-md inline-flex flex-col gap-2 shadow'>
          <h3 className='font-semibold text-slate-800'>Sponsered</h3>
          <img src="https://via.placeholder.com/150" className='w-75 h-50 rounded-md' alt="" />
          <p className='text-slate-600'>Email Marketing</p>
          <p className='text-slate-500'>Get the best deals on email marketing services.</p>
        </div>

        <RecentMessages />
      </div>
    </div>
  ): <Loading />
}

export default Feed
