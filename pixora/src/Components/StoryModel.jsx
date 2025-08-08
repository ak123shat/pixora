import React from 'react'
import { useState } from 'react'



const StoryModel = () => {
    const bgColors = ["#4f46e5", "#7c3aed", "#1dd1a1", "#feca57", "#ff9ff3", "#54a0ff"];

    const [mode , setMode] = useState("text");
    const [background , setBackground] = useState(bgColors[0]);
    const [text , setText] = useState("");
    const [media , setMedia] = useState(null);
    const [previewUrl , setPreviewUrl] = useState(null);

    const handleMediaChange = (e) => {
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

        </div>
  )
}

export default StoryModel
