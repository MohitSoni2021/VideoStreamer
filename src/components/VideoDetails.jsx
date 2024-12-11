import React from 'react'
import { NavLink } from 'react-router-dom'

const VideoDetailsComponent = ({ImageLink, VideoTitle,ChannelName, VideoId}) => {
  return (
    <NavLink to={`/videos/details/${VideoId}`} >
        <div className=' transition-all duration-150 cursor-pointer'>
      <div className="bg-black/15 max-w-[550px] rounded-lg p-3 border-2 border-gray-400 hover:border-white flex flex-col gap-5">
        <div className="w-full aspect-video  rounded-md">
            <img src={ImageLink} alt="" />
        </div>
        <div className="text-white">
            <h1 className='line-clamp-1 max-sm:line-clamp-none'>{VideoTitle}</h1>
            <p className="text-sm text-gray-500 line-clamp-1">{ChannelName}</p>
        </div>
      </div>
    </div>
    </NavLink>
  )
}

export default VideoDetailsComponent
