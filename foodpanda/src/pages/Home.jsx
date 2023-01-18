import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Bar from '../components/Bar/Bar'
import Resturants from '../components/Resturants'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
         <Header/>
            <Hero/>
            <Bar/>
            <Resturants/>
            <Footer/>
    </div>
  )
}

export default Home