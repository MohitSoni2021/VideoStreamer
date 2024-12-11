import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FaThumbsUp } from 'react-icons/fa'
import { useParams } from 'react-router-dom'
import { formatToSocialMediaNumber } from '../utils/BasicFunctions'

const VideoDetailsPageComponent = () => {
  
  let { vid } = useParams()

  const [response, setResponse] = useState([])
    const [channelDetails, setChannelDetails] = useState([])

    const getchannelDetails = async(id) => {
        let url = `https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics,contentDetails&id=${id}&key=AIzaSyBho4LbGPoJGbq90dOJhDmwUjqfJ2_vfNg` 
        const result = await axios.get(url)
        setChannelDetails(result.data.items)
    }

    const getVideoDetailAll = async() => {
        let url = `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics,status&id=${vid}&key=AIzaSyBho4LbGPoJGbq90dOJhDmwUjqfJ2_vfNg`
        const result = await axios.get(url)
        setResponse(result.data.items)
        getchannelDetails(result.data.items[0].snippet.channelId)
    }

    useEffect(()=>{
        getVideoDetailAll()
    }, [])

  
    return (
    <div className='p-5 max-sm:p-1 max-md:p-2 bg-[#121926] h-screen w-screen overflow-y-scroll flex flex-col items-center'>
        <div className=' w-8/12 max-md:w-11/12 max-sm:w-full max-sm:p-0 max-md:p-0 p-3 rounded-xl flex flex-col gap-5 text-white'>
            <div className=''>
            <iframe 
                className='w-full aspect-video rounded-xl border-2 border-gray-400'
            src={`https://www.youtube.com/embed/${vid}?si=ZZvD8-x-vYgZIOjP`}
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" 
            allowFullScreen>

                </iframe>
            </div>
            
             
            {
                response.map((ele, id)=>{
                    return(
                        <div className="w-full flex flex-col gap-5">
                <h1 className='text-2xl max-md:text-xl max-sm:text-lg text-wrap'>{ele.snippet.title}</h1>

                <div className="flex justify-between items-center">

                    <div className="flex bg-white/5 w-fit p-2 px-4 rounded-md items-center gap-3">
                        {
                            channelDetails.map(ele => {
                                return(
                                    <>
                                        <div className="w-[40px] h-[40px] bg-red-400 rounded-full overflow-hidden">
                                            <img src={ele.snippet.thumbnails.default.url} alt="" />
                                        </div>
                                        <div className="">
                                            <h2>{ele.snippet.title}</h2>
                                            <p className='text-sm text-gray-600'>{formatToSocialMediaNumber(ele.statistics.subscriberCount)}</p>
                                        </div>
                                    </>
                                )
                            })
                        }
                    </div>

                    <div className="flex gap-3 items-center p-3 bg-white/5 w-fit rounded-md h-full">
                        <FaThumbsUp />
                        <span>{formatToSocialMediaNumber(ele.statistics.likeCount)}</span>
                        
                    </div>
                </div>

                <div className="w-full bg-white/10 rounded-md p-2">
                    {ele.snippet.description}
                </div>


            </div>
                    )
                })
            }

        </div>
    </div>
  )
}

export default VideoDetailsPageComponent
