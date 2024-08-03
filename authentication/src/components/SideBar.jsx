import React from 'react'
import icon from '../assets/react.svg'
const SideBar = () => {
  return (
    <div className='w-[22%] bg-indigo-950 rounded-lg'>
      <div className="flex items-center px-4 gap-8 pb-9 pt-2 ">
        <div className="">...</div>
        <div className="">Book rent</div>
        
      </div>
      <div className="flex flex-col gap-2 p-4 ">
            <div className="flex items-center  rounded-lg hover:bg-slate-400  p-2">
                <div className="flex items-center gap-2 pl-2" >
                 <img src={icon} alt="" width={16} />
                 <span className="text-white "> DashBoard</span>
                </div>
               
            </div>
            <div className="flex items-center  rounded-lg hover:bg-slate-400  p-2">
                <div className="flex items-center gap-2 pl-2" >
                 <img src={icon} alt="" width={16} />
                 <span className="text-white "> DashBoard</span>
                </div>
               
            </div>
            <div className="flex items-center  rounded-lg hover:bg-slate-400  p-2">
                <div className="flex items-center gap-2 pl-2" >
                 <img src={icon} alt="" width={16} />
                 <span className="text-white "> DashBoard</span>
                </div>
               
            </div>
            <div className="flex items-center  rounded-lg hover:bg-slate-400  p-2">
                <div className="flex items-center gap-2 pl-2" >
                 <img src={icon} alt="" width={16} />
                 <span className="text-white "> DashBoard</span>
                </div>
               
            </div>
            <div className="flex items-center  rounded-lg hover:bg-slate-400  p-2">
                <div className="flex items-center gap-2 pl-2" >
                 <img src={icon} alt="" width={16} />
                 <span className="text-white "> DashBoard</span>
                </div>
               
            </div>
            <hr className=" border-gray-500  w-[95%] self-center" />
            <div className="flex items-center  rounded-lg hover:bg-slate-400  p-2">
                <div className="flex items-center gap-2 pl-2" >
                 <img src={icon} alt="" width={16} />
                 <span className="text-white "> DashBoard</span>
                </div>
               
            </div>
            <div className="flex items-center  rounded-lg hover:bg-slate-400  p-2">
                <div className="flex items-center gap-2 pl-2" >
                 <img src={icon} alt="" width={16} />
                 <span className="text-white "> DashBoard</span>
                </div>
               
            </div>
            <div className="flex items-center  rounded-lg hover:bg-slate-400  p-2">
                <div className="flex items-center gap-2 pl-2" >
                 <img src={icon} alt="" width={16} />
                 <span className="text-white "> DashBoard</span>
                </div>
               
            </div>
            <hr className=" border-gray-500  w-[95%] self-center" />
        </div>
       <div className="p-4 items-end mt-60">
       <div className=" flex  items-center justify-center p-2 bg-slate-400 rounded-lg gap-2 ">
            <img src={icon} alt="" width={16} />
            <span className="">LogOut</span>

        </div>
       </div>
    </div>
  )
}

export default SideBar
