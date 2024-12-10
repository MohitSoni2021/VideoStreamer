import React, { useEffect, useRef, useState } from 'react'
import { CgProfile } from 'react-icons/cg'
import { FaBell } from 'react-icons/fa'
import { IoIosSearch } from 'react-icons/io'
import { RiVideoAddFill } from 'react-icons/ri'
import VideoDetailsComponent from './VideoDetails'
import { useParams } from 'react-router-dom'
import { Bars } from 'react-loader-spinner'
import axios from 'axios'


const API_KEY = 'AIzaSyBho4LbGPoJGbq90dOJhDmwUjqfJ2_vfNg'


// https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&chart=mostPopular&regionCode=US&maxResults=10&key=YOUR_API_KEY --> for trending posts


const VideoCategoryIds = [
    ["music", "shopping", "gaming", "movie", "news", "sports" ],
    {data:{
        "music": 10,
        "shopping": 26,
        "gaming": 20,
        "movie": 1,
        "news": 25,
        "sports": 17
    }}
]





const MainAreaOuter = () => {
    const { opt } = useParams()
    const VideoContentAreaRef = useRef(null)

    const [userQuery, setUserQuery] = useState("")
    const [fetchedData, setFetchedData] = useState([])

    const [isLoading, setIsLoading] = useState(false)


    const getResponseByQuery = async() => {
        setIsLoading((prev) => !prev)
        let url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${userQuery}&type=video&maxResults=20&key=${API_KEY}`
        const response = await axios.get(url)
        setFetchedData(response.data.items)
        console.log(response.data.items)
        setIsLoading((prev) => !prev)
    }


    const getDataFromApi = async() => {
        setIsLoading((prev) => !prev)
        if (opt == "trending") {
            const response = await axios.get(`https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&chart=mostPopular&regionCode=IN&maxResults=20&key=${API_KEY}`)
            setFetchedData(response.data.items)
            console.log(response.data.items)
        }
        else if(VideoCategoryIds[0].includes(opt)){
            let url = `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&chart=mostPopular&regionCode=IN&videoCategoryId=${VideoCategoryIds[1].data[opt]}&maxResults=20&key=${API_KEY}`
            const response = await axios.get(url)
            setFetchedData(response.data.items)
        }else if(opt == undefined) {
            const response = await axios.get(`https://www.googleapis.com/youtube/v3/videos?&key=${API_KEY}&part=snippet,statistics&chart=mostPopular&regionCode=IN&maxResults=10`)
            setFetchedData(response.data.items)
        }

        setIsLoading((prev) => !prev)
    }

    useEffect(()=>{
        // console.log(opt)
        // if(VideoCategoryIds[0].includes(opt)){
        //     console.log(VideoCategoryIds[1].data[opt])
        // }else if(opt == "trending"){
        //     console.log("trending posts")
        // }
        getDataFromApi()
    }, [document.location.pathname])


  return (
    <div className='w-full bg-[#121926] h-screen overflow-y-scroll'>
      <div className=" p-3 flex justify-evenly items-center shadow-lg sticky top-0 bg-[#121926]">

        <div className="flex-1 justify-center flex">
            <div className=" border-2 border-green-400 rounded-lg flex w-1/2 max-sm:w-full text-green-400 px-2">
                <input type="text" className='outline-none border-none bg-transparent text-lg p-2 w-full' value={userQuery} onChange={(e)=>setUserQuery(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === "Enter")
                        getResponseByQuery();
                    }}
                />
                <button onClick={getResponseByQuery}><IoIosSearch className='text-2xl text-green-400'/></button>
            </div>
        </div>

        <div className="flex justify-end max-sm:hidden">
            <div className="text-3xl text-green-400 flex gap-3 flex-1">
                <RiVideoAddFill />
                <FaBell />
                <CgProfile />
            </div>
        </div>

      </div>


      

        
            {
                (isLoading)?<div className='w-full flex justify-center mt-7'><Bars /></div>:
                <div className='p-5 max-sm:p-2' ref={VideoContentAreaRef} >
            <div className='grid grid-cols-3 gap-5 max-md:grid-cols-2 max-md:gap-2 max-sm:grid-cols-1 max-sm:gap-2'>

            {
                fetchedData.map((ele, id)=>{
                    return (
                        <VideoDetailsComponent 
                        ImageLink={ ele.snippet.thumbnails.high.url}
                        VideoTitle={ele.snippet.title}
                        ChannelName={ele.snippet.channelTitle}
                        VideoId={ele.id}
                        key={id}
                        />
                    )
                })
            }

            </div>
            </div>
            }
        


    </div>
  )
}

export default MainAreaOuter
