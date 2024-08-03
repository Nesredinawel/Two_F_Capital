
import React, { useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { FaArrowDownLong } from "react-icons/fa6";

ChartJS.register(ArcElement, Tooltip, Legend);

const StaticBar = () => {

    const [input1, setInput1] = useState(54);
  const [input2, setInput2] = useState(20);
  const [input3, setInput3] = useState(26);

  const data = {
    labels: ['Input 1', 'Input 2', 'Input 3'],
    datasets: [
      {
        data: [input1, input2, input3],
        backgroundColor: ['#3572EF', '#387F39', '#FF0000'],
       
      },
    ],
  };
  const options = {
    cutout: '70%',
    radius:"70%",
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  const labels = ['Fiction ', 'Self Help', 'Business'];
  const values = [input1, input2, input3];

  return (
    <div className='flex bg-white h-full  rounded-lg  w-[24%] flex-col p-2 gap-4 '>
        
    <div className=' flex items-center p-4 flex-wrap   '>
       <h1 className="flex flex-col "><span className="font-semibold text-lg text-gray-700">This Month Statistics</span>
       <span className="text-xs text-gray-400 ">Tue, 14 Nov, 2024 11:30 AM</span>
       </h1>
    </div>
    <div className="shadow-2xl bg-slate-50  rounded-lg ">
       <div className="items-center px-2">
       <div className="flex items-center justify-between p-4">
            <span className="text-gray-600 font-medium">Income</span>
            <div className=" bg-slate-100 rounded-sm p-1.5">
                <div className="text-xs">This Month</div>
            </div>
        </div>
        <hr className=" border-gray-300  w-[95%] self-center " />
       </div>
       
       <div className="flex flex-col p-2 items-center ">
       <div className="flex items-baseline gap-2">
            <h1 className="font-bold text-2xl">ETB 9460.00</h1>
             <span className="text-red-500 text-xs  flex items-baseline "><FaArrowDownLong /> 1.5 %</span>
        </div>
        <div className="flex flex-col p-2 gap-1">
            <span className="text-gray-400 text-xs">Compared to ETB9940 last month </span>
            <span className="text-xs font-medium">Last month Income ETB 25658.00</span>
        </div>
       </div>
    </div>
    <div className="shadow-2xl bg-slate-50  rounded-lg ">
       <div className="flex flex-col">
       <div className="flex items-center justify-between p-2  ">
            <span className="text-gray-600 font-medium">Available Books</span>
            <div className=" bg-slate-100 rounded-sm p-1.5">
                <div className="text-xs">Today</div>
            </div>
        </div>
      
        <div className="flex flex-col p-3 gap-1 ">
      <Doughnut data={data} options={options}  />
       <div className="flex flex-col">
       {labels.map((label, index) => (
          <div key={index} className="mb-2 flex items-center  justify-between gap-16">
           <div className=" flex items-center justify-center">
           <span
              className="w-4 h-4 rounded-full mr-2 inline-block"
              style={{ backgroundColor: data.datasets[0].backgroundColor[index] }}
            ></span>
            <label className="mr-2">{label}:</label>
           </div>
            <span className=" border-gray-300  rounded px-2 py-1">{values[index]}</span>
          </div>
        ))}
    
    </div>
        </div>
       </div>
    </div>
   </div>
  )
}

export default StaticBar
