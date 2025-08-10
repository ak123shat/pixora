import { ArrowLeft, Sparkle, TextIcon, Upload } from 'lucide-react';
import React from 'react'
import { useState } from 'react'
import toast from 'react-hot-toast';



const StoryModel = ({setShowModel , fetchStories}) => {
    const bgColors = ["#4f46e5", "#7c3aed", "#1dd1a1", "#feca57", "#ff9ff3", "#54a0ff"];

    const [mode , setMode] = useState("text");
    const [background , setBackground] = useState(bgColors[0]);
    const [text , setText] = useState("");
    const [media , setMedia] = useState(null);
    const [previewUrl , setPreviewUrl] = useState(null);

    const handleMediaUpload = (e) => {
        const file = e.target.files?.[0];
        if (file) {
            setMedia(file);
            setPreviewUrl(URL.createObjectURL(file));

        }
    }
    const handleCreateStory = async () => {

    }

    return (
        <div className='fixed inset-0 z-110 min-h-screen bg-black/80 backdrop-blur text-white flex items-center justify-center p-4'>
            <div className='w-full max-w-md'>
                <div className='text-center mb-4 flex items-center justify-between'>
                    <button onClick={() => setShowModel(false)} className='text-white p-2 cursor-pointer'>
                        <ArrowLeft />
                    </button>
                    <h2 className='text-lg font-semibold'>Create Story</h2>
                    <span className='w-10'></span>
                </div>
                <div className='rounded-lg h-96 flex items-center justify-center relative' style={{ backgroundColor : background}}>
                        {mode === 'text' && (
                            <textarea value={text} onChange={(e) => setText(e.target.value)} className='bg-transparent text-white w-full h-fulll p-6 text-lg resize-none focus:outline-none' placeholder='Write your story...' />
                        )}

                        {
                        mode === 'media' && previewUrl && (
                            media?.type.startsWith('image') ? (
                                <img src={previewUrl} alt="Story Preview" className='object-contain max-h-full' />
                            ) : (
                                <video src={previewUrl} className='object-contain max-h-full'  />
                            )
                        )}
                </div>

                <div className='flex mt-4 gap-2'>
                    {bgColors.map((color) => (
                        <button key={color} onClick={() => setBackground(color)} className='w-8 h-8 rounded-full ring cursor-pointer' style={{ backgroundColor: color }} />
                    ))}
                </div>

                <div className='flex mt-4 gap-2'>
                    <button onClick={() => {setMode('text'); setMedia(null); setPreviewUrl(null);}} className={`flex-1 flex item-center justify-center gap-2 p-2 rounded cursor-pointer ${mode === 'text' ? 'bg-indigo-600' : 'bg-gray-700'} `}>
                        <TextIcon size={18} /> Text
                    </button>
                    <label className={`flex flex-1 items-center justify-center gap-2 p-2 rounded cursor-pointer ${mode === 'media' ? 'bg-indigo-600' : 'bg-gray-700'}`}>
                        <input type="file" accept="image/*,video/*" id="media-upload" className='hidden' onChange={(e)=>{handleMediaUpload(e); setMode('media');}} />
                        <Upload size={18} /> Photo/Video
                    </label>
                </div>
                <button onClick={()=> toast.promise(handleCreateStory(), {
                    loading: 'Creating story...',
                    success: 'Story created successfully!',
                    error: 'Error creating story.'
                })} className='flex items-center justify-center gap-2 text-white py-3 mt-4 w-full rounded bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 active:scale-95 transition cursor-pointer'>
                    <Sparkle size={20} /> Create Story
                </button>

            </div>
        </div>
  )
}

export default StoryModel
