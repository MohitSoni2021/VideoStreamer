import React from 'react'
import { NavLink } from 'react-router-dom'

const SidebarOptionListComponent = ({icon, title, style, path}) => {
  return (
    <NavLink to={path} >
        <div className={`flex gap-2 text-lg max-md:w-fit text-red-600 items-center cursor-pointer hover:bg-red-600 hover:text-white p-2 rounded-lg ${style}`}>
      <span className='max-md:text-xl'>{icon}</span> <span className='max-md:hidden'>{title}</span>
    </div>
    </NavLink>
  )
}

export default SidebarOptionListComponent
