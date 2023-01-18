import React from 'react'
import "./index.css"

const Resturants = () => {
  return (
    <div className='w-full h-auto  mt-[130px]'>
        <div className="title w-full h-[60px]  bg-[#e21b70] flex justify-center items-center">
             <h3 className='text-2xl font-black text-white'>Resturants</h3>
        </div>
        <div className='resturants grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 place-items-center gap-3'>
            <div className='w-[300px] h-[300px] border-2 border-[#e21b70] '>
              <div className='imageBg w-full h-[150px] '>
                <img  className='w-full h-full' src='https://images.unsplash.com/photo-1615719413546-198b25453f85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Zm9vZCUyMGRlbGl2ZXJ5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60'/>
              </div>
              <div className='content w-full h-[150px]  flex flex-col justify-around items-center'>
                  <p className='overflow-hidden'>loremsadsaaaaaaaa</p>
                  <button className='bg-[#e21b70] text-white border-2 hover:text-[#e21b70] hover:bg-white hover:border-[#e21b70] pl-5 pr-5 pt-2 pb-2'>Menu</button>
              </div>
            </div>
            <div className='w-[300px] h-[300px] border-2 border-[#e21b70]'>
              <div className='imageBg w-full h-[150px] '>
                <img  className='w-full h-full' src='https://images.unsplash.com/photo-1615719413546-198b25453f85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Zm9vZCUyMGRlbGl2ZXJ5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60'/>
              </div>
              <div className='content w-full h-[150px]  flex flex-col justify-around items-center'>
                  <p className='overflow-hidden'>loremsadsaaaaaaaa</p>
                  <button className='bg-[#e21b70] text-white border-2 hover:text-[#e21b70] hover:bg-white hover:border-[#e21b70] pl-5 pr-5 pt-2 pb-2'>Menu</button>
              </div>
            </div>
            <div className='w-[300px] h-[300px] border-2 border-[#e21b70]'>
              <div className='imageBg w-full h-[150px] '>
                <img  className='w-full h-full' src='https://images.unsplash.com/photo-1615719413546-198b25453f85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Zm9vZCUyMGRlbGl2ZXJ5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60'/>
              </div>
              <div className='content w-full h-[150px]  flex flex-col justify-around items-center'>
                  <p className='overflow-hidden'>loremsadsaaaaaaaa</p>
                  <button className='bg-[#e21b70] text-white border-2 hover:text-[#e21b70] hover:bg-white hover:border-[#e21b70] pl-5 pr-5 pt-2 pb-2'>Menu</button>
              </div>
            </div>
            <div className='w-[300px] h-[300px] border-2 border-[#e21b70]'>
              <div className='imageBg w-full h-[150px] '>
                <img  className='w-full h-full' src='https://images.unsplash.com/photo-1615719413546-198b25453f85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Zm9vZCUyMGRlbGl2ZXJ5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60'/>
              </div>
              <div className='content w-full h-[150px]  flex flex-col justify-around items-center'>
                  <p className='overflow-hidden'>loremsadsaaaaaaaa</p>
                  <button className='bg-[#e21b70] text-white border-2 hover:text-[#e21b70] hover:bg-white hover:border-[#e21b70] pl-5 pr-5 pt-2 pb-2'>Menu</button>
              </div>
            </div>
            <div className='w-[300px] h-[300px] border-2 border-[#e21b70]'>
              <div className='imageBg w-full h-[150px] '>
                <img  className='w-full h-full' src='https://images.unsplash.com/photo-1615719413546-198b25453f85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Zm9vZCUyMGRlbGl2ZXJ5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60'/>
              </div>
              <div className='content w-full h-[150px]  flex flex-col justify-around items-center'>
                  <p className='overflow-hidden'>loremsadsaaaaaaaa</p>
                  <button className='bg-[#e21b70] text-white border-2 hover:text-[#e21b70] hover:bg-white hover:border-[#e21b70] pl-5 pr-5 pt-2 pb-2'>Menu</button>
              </div>
            </div>
            
        </div>

      
    </div>
  )
}

export default Resturants