import React from 'react'
import { CiSearch } from "react-icons/ci";
import { IoFilterOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { BsList } from "react-icons/bs";
import { LuSlidersHorizontal } from "react-icons/lu";
import { TfiLayoutColumn4Alt } from "react-icons/tfi";

const LiveStatus = () => {
  return (
    <div className='flex bg-white  rounded-lg  w-[100%]  '>
   <div className=" p-9 ">
   <div className="flex items-center absolute right-12 gap-2 ">
     <CiSearch />
     <IoFilterOutline />
     <TfiLayoutColumn4Alt />
     <BsList />
     <LuSlidersHorizontal />
     
     </div>
<div className="p-4 flex flex-col gap-4 ">
<span className="font-bold text-lg">Live Book Status</span>
 
 <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full text-left text-sm font-light">
              <thead className="border-b font-medium dark:border-neutral-500">
                <tr>
                  <th scope="col" className="px-6 py-4">#</th>
                  <th scope="col" className="px-6 py-4">First</th>
                  <th scope="col" className="px-6 py-4">Last</th>
                  <th scope="col" className="px-6 py-4">Handle</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b dark:border-neutral-500">
                  <td className="whitespace-nowrap px-6 py-4 font-medium">1</td>
                  <td className="whitespace-nowrap px-6 py-4">Mark</td>
                  <td className="whitespace-nowrap px-6 py-4">Otto</td>
                  <td className="whitespace-nowrap px-6 py-4">@mdo</td>
                </tr>
                <tr className="border-b dark:border-neutral-500">
                  <td className="whitespace-nowrap px-6 py-4 font-medium">2</td>
                  <td className="whitespace-nowrap px-6 py-4">Jacob</td>
                  <td className="whitespace-nowrap px-6 py-4">Thornton</td>
                  <td className="whitespace-nowrap px-6 py-4">@fat</td>
                </tr>
                <tr className="border-b dark:border-neutral-500">
                  <td className="whitespace-nowrap px-6 py-4 font-medium">3</td>
                  <td className="whitespace-nowrap px-6 py-4">Larry</td>
                  <td className="whitespace-nowrap px-6 py-4">Wild</td>
                  <td className="whitespace-nowrap px-6 py-4">@twitter</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
 </div>
</div>
     
   </div>
  
   
  )
}

export default LiveStatus
