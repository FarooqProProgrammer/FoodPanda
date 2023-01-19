import React from 'react'
import "./index.css"
import Header from '../Header'
import Footer from '../Footer'
import { useSelector } from 'react-redux'

const AddToCart = () => {
    const ids = useSelector(state => console.log(state))
   return (
    <div>
        <Header/>
        <div className="title w-full h-[70px] bg-[#e21b70] flex justify-center items-center">
            <p className='text-white lg:text-xl font-black md:text-[16px] sm:text-[15px]'>You Have Selected Following Items</p>
        </div>
        <Footer/>
    </div>
  )
}

export default AddToCart