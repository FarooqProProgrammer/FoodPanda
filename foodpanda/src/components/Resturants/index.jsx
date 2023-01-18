import React from 'react'
import "./index.css"
import { Button, Modal } from 'antd';
import { useState } from 'react';
import { Input } from 'antd';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Resturants = () => {
      const [isModalOpen, setIsModalOpen] = useState(false);
      const [file,setFile] = useState();
      const [Name,setName] = useState();
      const [discription,setDescription] = useState();
      const [data,setData] = useState([]);

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
        
        axios.post('http://localhost:3100/AddResturants', {
          Name:Name,
          discription:discription,
          url:file
        })
        .then((res) => {
            console.log(res.data)
          
        }).catch((error) => {
            console.log(error)
        });

      }


      React.useEffect(()=>{
        axios.get('http://localhost:3100')
        .then((res) => {
            console.log(res.data)
            setData(res.data)

        }).catch((error) => {
            console.log(error)
        });

      },[])
    
    
  return (
    <div className='w-full h-auto  mt-[130px]'>
        <div className="title w-full h-[60px]  bg-[#e21b70] flex justify-around items-center">
             <h3 className='text-2xl font-black text-white'>Resturants</h3>
             <button onClick={showModal} className='pl-4 pr-4 pb-3 pt-3 bg-white text-[#e21b70]'>Add New Resturants</button>
        </div>
,        <div className='resturants grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 place-items-center gap-3'>
            
              {
                data.map((item)=>{
                  return(
                      <div className='w-[300px] h-[300px] border-2 border-[#e21b70] '>
                      <div className='imageBg w-full h-[150px] '>
                        <img  className='w-full h-full' src={item.url} alt={"dsADS"}/>
                      </div>
                      <div className='content w-full h-[150px]  flex flex-col justify-around items-center'>
                          <p className='overflow-hidden'>{item.Name}</p>
                          <Link to={`/Menu/${item._id}`} className='bg-[#e21b70] text-white border-2 hover:text-[#e21b70] hover:bg-white hover:border-[#e21b70] pl-5 pr-5 pt-2 pb-2'>Menu</Link>
                      </div>
                    </div>
                    
                  )
                })
              }
           
        
            
        </div>

        <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
          <div className="w-full h-[300px] bg-[#e21b70]  flex flex-col justify-center items-center">
              <Input className='w-[80%] mt-2'onChange={(e)=> setFile(e.target.value)} type="text" placeholder='Enter URl' />
              <Input type="text" placeholder='Resturant Name' onChange={(e)=> setName(e.target.value)} className='w-[80%] mt-2' />
              <Input className='w-[80%] h-[100px] mt-2' onChange={(e)=> setDescription(e.target.value)}/>
              <Button onClick={Submit} className='mt-2 w-[200px] rounded-none bg-white text-[#e21b70]'>Submit</Button>
          </div>
        </Modal>

    </div>
  )
}

export default Resturants