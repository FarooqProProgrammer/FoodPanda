import React from 'react'
import "./Bar.css"


const Bar = () => {
  return (
    <div className='Bar w-full h-[470px] relative'>
        <div className="Modal lg:w-[500px] md:w-[300px] sm:w-[300px] h-[400px] border-2 border-[#e21b70] rounded-md bg-white absolute top-[200px] lg:left-40 md:left-4 sm:left-4 flex flex-col justify-around items-center">
            <p className='text-gray-500 text-2xl'>List your restaurant or shop on foodpanda</p>
            <p className='w-[80%] text-gray-300'>Would you like millions of new customers to enjoy your amazing food and groceries? So would we!</p>
            <p className='w-[80%] text-gray-300'>It's simple: we list your menu and product lists online, help you process orders, pick them up, and deliver them to hungry pandas – in a heartbeat!</p>
            <p className='w-[80%] text-gray-300'>Interested? Let's start our partnership today!</p>
            <button className='w-[80%] h-[60px] border-2 bg-[#e21b70] text-white font-bold hover:bg-white hover:text-[#e21b70] hover:border-[#e21b70]'>Get Started</button>
        </div>
    </div>
  )
}

export default Bar