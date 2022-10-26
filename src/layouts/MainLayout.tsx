import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from '../components/SideBar'

function MainLayout() {
  return (
    <div className='relative min-h-screen md:flex'>
      <div className='bg-blue-800 text-blue-100 w-64 space-y-6 px-2   absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out'>
        <SideBar />
      </div>
      <Outlet />
    </div>
  )
}

export default MainLayout
