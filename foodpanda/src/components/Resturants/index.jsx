import React from 'react'
import "./index.css"
import { Button, Modal } from 'antd';
import { useState } from 'react';
import { Input } from 'antd';
import { db, storage } from '../Config';
import { addDoc,collection } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
const Resturants = () => {
      const [isModalOpen, setIsModalOpen] = useState(false);
      const [file,setFile] = useState();
      const [Name,setName] = useState();
      const [discription,setDescription] = useState();
      const [url,setUrl] = useState();


      const showModal = () => {
        setIsModalOpen(true);
      };
      const handleOk = () => {
        setIsModalOpen(false);
      };
      const handleCancel = () => {
        setIsModalOpen(false);
      };

      async function Submit(){
        console.log(Name);
        console.log(discription);
        const docRef = await addDoc(collection(db, "Resturants"), {
          name: Name,
          discription:discription,
          url:file
        });
        console.log("Document written with ID: ", docRef.id);
      }
    
    
  return (
    <div className='w-full h-auto  mt-[130px]'>
        <div className="title w-full h-[60px]  bg-[#e21b70] flex justify-around items-center">
             <h3 className='text-2xl font-black text-white'>Resturants</h3>
             <button onClick={showModal} className='pl-4 pr-4 pb-3 pt-3 bg-white text-[#e21b70]'>Add New Resturants</button>
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

        <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
          <div className="w-full h-[300px] bg-[#e21b70]  flex flex-col justify-center items-center">
              <Input className='w-[80%] mt-2'onChange={(e)=> setFile(e.target.value)} type="text" placeholder='Enter URl' />
              <Input type="text" placeholder='Resturant Name' onChange={(e)=> setName(e.target.value)} className='w-[80%] mt-2' />
              <textarea className='w-[80%] h-[100px] mt-2' onChange={(e)=> setDescription(e.target.value)}></textarea>
              <Button onClick={Submit} className='mt-2 w-[200px] rounded-none bg-white text-[#e21b70]'>Submit</Button>
          </div>
        </Modal>

    </div>
  )
}

export default Resturants