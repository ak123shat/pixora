import { BadgeCheck, Heart, MessageCircle, Share, Share2 } from 'lucide-react'
import moment from 'moment'
import React  from 'react'
import { useNavigate } from 'react-router-dom'


const PostCard = ({post}) => {
    const postWithHashtags = post.content.replace(/#(\w+)/g, '<span class="text-indigo-600">#$1</span>');
    const [likes, setLikes] = React.useState(post.likes_count);
    const currentUser = dummyUserData;

    const handleLike = async () => {
        if (likes.includes(currentUser._id)) {
            setLikes(likes.filter(id => id !== currentUser._id));
        } else {
            setLikes([...likes, currentUser._id]);
        }
    }
    const navigate = useNavigate();
     
  return (
    <div className='bg-white rounded-xl shadow p-4 space-y-4 w-full max-w-2xl'>
      {/* user info */}
      <div onClick={() => navigate(`/profile/${post.user._id}`)} className='inline-flex items-center gap-3 cursor-pointer'>
        <img src={post.user.profile_picture} alt="" className='w-10 h-10 rounded-full object-cover border border-white' />
     <div>
        <div className='flex items-center space-x-1'>
          <p className='text-gray-800 font-medium'>{post.user.full_name}</p>
          <BadgeCheck className='w-4 h-4 text-blue-500' />
        </div>
        <div className='text-sm text-gray-500'>
            @{post.user.username} · {moment(post.createdAt).fromNow()}
        </div>
     </div>
     </div>

     {post.content && <div className='text-gray-800 text-sm whitespace-pre-line' dangerouslySetInnerHTML={{__html: postWithHashtags}}/>}

     {/* Images */}
     <div className='grid grid-cols-2 gap-2'>
       {post.images_urls.map((image, index) => (
         <img key={index} src={image} alt={`Post image ${index + 1}`} className={`w-full h-48 object-cover rounded-lg ${post.images_urls.length === 1 && 'col-span-2 h-auto'}`} />
       ))}
     </div>
       {/* Actions */}
       <div className='flex items-center gap-4 text-gray-600 text-sm pt-2 border-t border-gray-300'>
         <div className='flex items-center gap-1'>
            <Heart className={`w-4 h-4 cursor-pointer ${likes.includes(currentUser._id) && 'text-red-500 fill-red-500'}`} onClick={handleLike} />
            <span>{likes.length}</span>
         </div>

         <div className='flex items-center gap-1'>
            <MessageCircle className='w-4 h-4 cursor-pointer' />
            <span>{14}</span>
         </div>

         <div className='flex items-center gap-1'>
            <Share2 className='w-4 h-4 cursor-pointer' />
            <span>{12}</span>
         </div>

       </div>
    </div>
  )
}

export default PostCard
