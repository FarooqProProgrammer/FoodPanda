import React from 'react'
import "./Hero.css"
import bg from "../../assets/images/Header_bg.jpg"
import { Button, Input } from 'antd';

const Hero = () => {
  return (
    <div className='Hero w-full h-[500px] flex justify-center items-center'>
        <div className="search w-[730px] h-[70px] flex lg:flex-row justify-center items-center ">
                <Input className='h-[100%]' placeholder="Search Your favourites Resturants" />
                <Button className='w-[200px] h-[100%] text-white font-black bg-[#E21B70] '>Search</Button>
        </div>
    </div>
  )
}

export default Hero