import React from 'react'
import "./index.css"
import panda from "../../assets/images/PandaIcon.svg"
import {BiUserCircle} from "react-icons/bi"
import {MdStorefront} from "react-icons/md"
const Header = () => {
  return (
    <div className='header w-full h-[70px]  flex justify-between items-center'>
        <div className="icons w-[200px] h-[70px]  flex justify-center items-center">
            <img src={panda} alt="" />
            <h3 className='text-[#E21B70] text-2xl ml-1'>FoodPanda</h3>
        </div>
        <div className="right flex">
          <div className="login w-[150px] h-[70px] flex justify-center items-center cursor-pointer">
              <BiUserCircle size={40} className='text-[#E21B70]'/>
              <p className='ml-2 uppercase text-xl font-black text-[#e21b70]'>Login</p>
          </div>
          <div className="store w-[50px] h-[70px] flex justify-center items-center">
            <MdStorefront size={30} className='text-[#e21b70]'/>
          </div>
        </div>
    </div>
  )
}

export default Header