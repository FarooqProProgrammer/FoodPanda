import React from 'react'
import "./index.css"
import panda from "../../assets/images/PandaIcon.svg"
const Header = () => {
  return (
    <div className='w-full h-[70px] border-2 border-black flex justify-around items-center'>
        <div className="icons w-[200px] h-[50px] border-2 border-black flex justify-center items-center">
            <img src={panda} alt="" />
            <h3 className='text-[#E21B70] text-2xl ml-1'>FoodPanda</h3>
        </div>
    </div>
  )
}

export default Header