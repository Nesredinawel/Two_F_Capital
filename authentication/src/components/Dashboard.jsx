import React from 'react'
import MenuBar from './MenuBar'
import StaticBar from './StaticBar'
import StatusBar from './StatusBar'

const Dashboard = () => {
  return (
   <div className=" flex w-full flex-col gap-2">
    
    <div className="   w-full ">
        
      <MenuBar />
    </div>
    <div className="flex  justify-center gap-2">
    <StaticBar />
    <div className="w-full"><StatusBar /></div>
    </div>
   
   </div>
  )
}

export default Dashboard
