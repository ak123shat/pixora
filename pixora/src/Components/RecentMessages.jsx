import moment from 'moment';
import React, { use } from 'react'
import { Link } from 'react-router-dom';

const RecentMessages = () => {
    const [messages, setMessages] = React.useState([]);
    const fetchRecentMessages = async () => {
        setMessages(dummyMessagesData);
    }
    useEffect(() => {
        fetchRecentMessages();
    }, []);

  return (
    <div className='bg-white max-w-xs mt-4 p-4 min-h-20 rounded-md shadow text-xs text-slate-800'>
        <h3 className='font-semibold text-slate-800 mb-2'>Recent Messages</h3>
        <div className='flex flex-col max-h-56 overflow-y-scroll no-scrollbar'>
            {
                messages.map((message, index) => (
                    <Link key={index} to={`/messages/${message.id}`}>
                        <div className='flex items-start gap-2 p-2 hover:bg-gray-100'>
                            <img src={message.from_user_id.profile_picture} alt="" className='w-8 h-8 rounded-full object-cover' />
                            <div className='flex flex-col justify-between'>
                                <span className='font-semibold'>{message.from_user_id.full_name}</span>
                                <p className='text-[10px] text-gray-500'>{moment(message.createdAt).fromNow()}</p>
            
                            </div>
                            <div className='flex justify-between'>
                                <p className='text-gray-500'>{message.text ? message.text : 'media '}</p>
                                {!message.seen && <p className='bg-indigo-500 text-white w-4 h-4 flex items-center justify-center rounded-full text-[10px]'>1</p>}
                            </div>
                        </div>
                    </Link>
                ))
            }
        </div>
      
    </div>
  )
}

export default RecentMessages
