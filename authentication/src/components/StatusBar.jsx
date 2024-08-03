import React from 'react'
import SummaryStatus from './SummaryStatus'
import LiveStatus from './LiveStatus'

const StatusBar = () => {
  return (
    <div className='flex flex-col gap-4 '>
      <LiveStatus />  
     <SummaryStatus />
    </div>
  )
}

export default StatusBar
