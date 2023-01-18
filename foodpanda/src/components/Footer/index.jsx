import React from 'react'
import {BsFacebook} from "react-icons/bs"
import {AiFillTwitterCircle,AiFillLinkedin} from "react-icons/ai"
const Footer = () => {
  return (
    <>
    <div className='w-full lg:h-[350px] md:h-auto sm:h-auto  bg-[#e21b70] mt-3 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>
      <div className='w-[332px] h-[350px]  flex flex-col justify-around items-center' >
        <h3 className='text-white text-2xl font-black'>Services</h3>
        <ul>
            <li className='text-white mb-3 cursor-pointer'>Food Parnter</li>
            <li className='text-white mb-3 cursor-pointer'>Time Delivery</li>
            <li className='text-white mb-3 cursor-pointer'>Healthy Foods</li>
            <li className='text-white mb-3 cursor-pointer'>Best Deals</li>
            <li className='text-white mb-3 cursor-pointer'>Your Partner</li>
            
        </ul>
      </div>
      <div className='w-[332px] h-[350px]  flex flex-col justify-around items-center' >
        <h3 className='text-white text-2xl font-black'>About Co</h3>
        <ul>
            <li className='text-white mb-3 cursor-pointer'>Customer Satisfication</li>
            <li className='text-white mb-3 cursor-pointer'>Profitable Deals</li>
            <li className='text-white mb-3 cursor-pointer'>Since 2000</li>
            <li className='text-white mb-3 cursor-pointer'>Best Deals</li>
            <li className='text-white mb-3 cursor-pointer'>FAQs</li>
            
        </ul>
      </div>
      <div className='w-[332px] h-[350px]  flex flex-col justify-around items-center' >
        <h3 className='text-white text-2xl font-black'>Careers</h3>
        <ul>
            <li className='text-white mb-3 cursor-pointer'>Suggest a Resturants</li>
            <li className='text-white mb-3 cursor-pointer'>Corporate Customer</li>
            <li className='text-white mb-3 cursor-pointer'>Panda Magzines</li>
            <li className='text-white mb-3 cursor-pointer'>Partner with us</li>
            <li className='text-white mb-3 cursor-pointer'>Become an Affiliate</li>
            
        </ul>
      </div>
     
    </div>
     <div className='logos w-full h-[70px]  bg-[#e21b70] flex justify-center items-center'>
            <BsFacebook size={40} className='text-white cursor-pointer'/>
            <AiFillTwitterCircle size={45} className='text-white ml-1 cursor-pointer' />
            <AiFillLinkedin size={45} className='text-white ml-1 cursor-pointer' />
            
     </div>
     </>
  )
}

export default Footer
