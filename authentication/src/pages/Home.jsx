import React from 'react'
import SideBar from '../components/SideBar'

import Dashboard from '../components/Dashboard'

const Home = () => {
  return (
    <div className=' h-full flex gap-2 p-4 bg-slate-200'>
      <SideBar />
      <div className="flex w-full">
        <Dashboard />
      </div>
    </div>
  )
}

export default Home
