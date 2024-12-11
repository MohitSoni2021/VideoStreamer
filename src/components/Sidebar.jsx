import React from 'react'
import SidebarOptionListComponent from './SidebarOptionList'
import { IoGameController, IoHome, IoNewspaperSharp } from 'react-icons/io5'
import { FaFire, FaMusic, FaShoppingBag } from 'react-icons/fa'
import { BiSolidMoviePlay } from 'react-icons/bi'
import { HiMiniTrophy } from 'react-icons/hi2'
import { MdOutlinePersonalVideo, MdSubscriptions } from 'react-icons/md'
import { SiYoutubeshorts } from 'react-icons/si'








const SidebarComponents = () => {
  return (
    <div className='h-screen w-[250px] bg-[#121926] z-10 p-3  shadow-xl max-md:w-fit'>
      <h1 className='text-center text-3xl max-md:hidden text-orange-100 py-2 font-black font-serif'>VideoStreamer</h1>
        <MdOutlinePersonalVideo  className='text-3xl  my-5 text-orange-100 max-md:block hidden'/>
      <div className="mt-5 max-md:w-fit">

      <SidebarOptionListComponent
      icon={<IoHome />}
      title={"Home"}
      path={"/"}
      />

      <SidebarOptionListComponent
      icon={<SiYoutubeshorts />}
      title={"Shorts"}
      path={"/videos/option/shorts"}
      />

      <SidebarOptionListComponent
      icon={<MdSubscriptions />}
      title={"Subscriptions"}
      path={"/"}
      />

      <div className="w-full h-[1px] my-5 bg-red-600"></div>

      <SidebarOptionListComponent
      icon={<FaFire />}
      title={"Trending"}
      path={"/videos/option/trending"}
      />

      <SidebarOptionListComponent
      icon={<FaShoppingBag />}
      title={"Shopping"}
      path={"/videos/option/shopping"}
      />

      <SidebarOptionListComponent
      icon={<FaMusic />}
      title={"Music"}
      path={"/videos/option/music"}
      />

      <SidebarOptionListComponent
      icon={<IoGameController />}
      title={"Gaming"}
      path={"/videos/option/gaming"}
      />

      <SidebarOptionListComponent
      icon={<BiSolidMoviePlay />}
      title={"Movie"}
      path={"/videos/option/movie"}
      />

      <SidebarOptionListComponent
      icon={<IoNewspaperSharp />}
      title={"News"}
      path={"/videos/option/news"}
      />

      <SidebarOptionListComponent
      icon={<HiMiniTrophy />}
      title={"Sports"}
      path={"/videos/option/sports"}
      />

      </div>
    </div>
  )
}

export default SidebarComponents
