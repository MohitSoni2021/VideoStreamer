import React from 'react'
import SidebarComponents from './components/Sidebar'
import MainAreaOuter from './components/MainAreaOuter'

const App = () => {
  return (
    <div className='flex'>
      <SidebarComponents />
      <MainAreaOuter />
    </div>
  )
}

export default App
