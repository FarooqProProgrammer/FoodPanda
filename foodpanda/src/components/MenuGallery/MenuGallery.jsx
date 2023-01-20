import React from 'react'
import "./index.css"
import { Button, Menu, Modal } from 'antd';
import { useState } from 'react';
import { Input } from 'antd';
import axios from "axios"
import {useNavigate, useParams} from "react-router-dom"
import {AiFillDelete,AiOutlineShoppingCart} from "react-icons/ai"
import { Cart } from '../../Redux/Action/Cart';
import { useDispatch, useSelector } from 'react-redux';
import {setDoc,doc,deleteDoc,addDoc,collection} from "firebase/firestore"
import {db} from "../Config"
import { useDisclosure } from '@chakra-ui/react';
import Box from '@mui/material/Box';
import Buttond from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modald from '@mui/material/Modal';
import { UpdateCart } from '../../Redux/Action/Update';
const MenuGallery = () => {
      const [isModalOpen, setIsModalOpen] = useState(false);
      const [file,setFile] = useState();
      const [Name,setName] = useState();
      const [price,setPrice] = useState();
      const [Menus,setMenus] = useState([]);
      const { isOpen, onOpen, onClose } = useDisclosure()
      const userAuth = useSelector(state => state.UserReducer.login)
      const {id} = useParams();
      const navigation = useNavigate();
      const dispatch = useDispatch();

      const showModal = () => {
        setIsModalOpen(true);
      };
      const handleOk = () => {
        setIsModalOpen(false);
      };
      const handleCancel = () => {
        setIsModalOpen(false);
      };
      // console.log(props);
     
      async function Submit(){
        axios.post('http://localhost:3100/AddMenu', {
          Name: Name,
          Discription:price,
          url:file,
          Resturant_id:id
        })
        .then((res) => {
            console.log(res.data)
          
        }).catch((error) => {
            console.log(error)
        });

        const docRef = await addDoc(collection(db, "MenuGroup"), {
          Name: Name,
          Discription:price,
          url:file,
          Resturant_id:id
        });
        console.log("Document written with ID: ", docRef.id);
      }

        const [item,setItem] = useState([]);
        const [Price, setprice] = useState([])
        const [post,setPost] = useState(false)
        const Add_Item=(id,price)=>{
        //      axios.post(`http://localhost:3100/CartID`,{
        //   id:id
        // }).then((res)=>{
        //     console.log(res);
           
        // }).catch((error) => {
            
        // });
        const list = [...item]
        list.push(id)
        setItem(list)

        const p = [...Price]
        p.push(price)
        setprice(p)
           
        
        }
        const goto = async () =>{
          console.log(Price);
          await deleteDoc(doc(db, "Carts","CartInfo"))
          await setDoc(doc(db, "Carts","CartInfo"), {
          id:item,
          Price:Price
        });
      
        navigation("/Cart")
        }
        React.useEffect(()=>{
          axios.post(`http://localhost:3100/getMenu`,{
            id:id
          }).then((res)=>{
             console.log(res.data);
              setMenus(res.data)
              const list = [...res.data]
              list.push(res.data)
              console.log(Menus);
          }).catch((error) => {
              
          });
        },[post === true])
      React.useEffect(()=>{
        axios.post(`http://localhost:3100/getMenu`,{
          id:id
        }).then((res)=>{
           console.log(res.data);
            setMenus(res.data)
            const list = [...res.data]
            list.push(res.data)
            console.log(Menus);
        }).catch((error) => {
            
        });
      },[])

   
      
      const DeleteMenu =(id)=>{
        axios.delete(`http://localhost:3100/DeleteMenu/${id}`).then((res)=>{
          console.log(res.data)
        }).catch((error) => {
            
        });

        axios.post(`http://localhost:3100/CartDelete`,{
          id:id
        }).then((res)=>{
            console.log('====================================');
            console.log("Deleted Successfully");
            console.log('====================================');
        }).catch({

        })
      }

        // function Update(id,price,url){
        //   console.log(id,price,url);
        //   showModals()
        // }
    

        const [isModalOpens, setIsModalOpens] = useState(false);
        const [idUpdate,setIdUpdate] = useState();
        const [PriceUpdate,setPriceUpdate] = useState();
        const [UrlUpdate,setUrlUpdate] = useState();
        const [Names, setNames] = useState();
        
        const showModals = (id,name,price,url) => {
          const updateItem = {
            id:id,
            name:name,
            price:price,
            url:url
          }
          setIdUpdate(id);
          setNames(name)
          setPriceUpdate(price);
          setUrlUpdate(url)
          dispatch(UpdateCart(updateItem))
          setIsModalOpens(true);
        };
        const handleOks = () => {
          setIsModalOpens(false);
        };
        const handleCancels = () => {
          setIsModalOpens(false);
        };

        

        
    
  return (
    <div className='w-full h-auto  mt-4'>
        <div className="title w-full h-[60px]  bg-[#e21b70] flex justify-around items-center">
             <h3 className='text-2xl font-black text-white'>Resturants Menu</h3>
             <div className="box flex">
                {userAuth.email === "admin@gmail.com" ?
                 <button onClick={showModal} className='pl-4 pr-4 pb-3 pt-3 bg-white text-[#e21b70]'>Add New Menu</button>
                 :
                 ""
                }
               
                <AiOutlineShoppingCart size={40} className='text-white font-black ml-2 mt-1 cursor-pointer' onClick={goto}/>
             </div>
            
        </div>
        <div className='resturants grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 place-items-center gap-3'>
            {
              Menus.map((item)=>{
                return (
                  <div className='w-[300px] h-[300px] border-2 border-[#e21b70] relative'>
                  <div className='imageBg w-full h-[150px] '>
                    <img  className='w-full h-full' src={item.url} alt={item.name}/>
                  </div>
                  <div className='content w-full h-[150px]  flex flex-col justify-around items-center'>
                      <p className='overflow-hidden text-3xl  hover:text-[#e21b70]'>{item.Name}</p>
                      <p className='overflow-hidden text-3xl  hover:text-[#e21b70] '>{item.Discription}: Rupees</p>
                      {userAuth.email === "admin@gmail.com"?
                      <button onClick={()=> showModals(item._id,item.Name,item.Discription,item.url)} className='bg-[#e21b70] text-white border-2 hover:text-[#e21b70] hover:bg-white hover:border-[#e21b70] pl-5 pr-5 pt-2 pb-2'>Update</button>:
                      <button onClick={()=> Add_Item(item._id,item.Discription)} className='bg-[#e21b70] text-white border-2 hover:text-[#e21b70] hover:bg-white hover:border-[#e21b70] pl-5 pr-5 pt-2 pb-2'>Add to Cart</button>

                      }
                  </div>
                  {userAuth.email === "admin@gmail.com" ?
                                    <AiFillDelete onClick={()=> DeleteMenu(item._id)} size={40} className='absolute top-0 right-0 text-white cursor-pointer hover:text-[#e21b70]'/>

                                  :
                                  ""
                                  }
                </div>
                )
              })
            }
           
         
            
        </div>

         <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
          <div className="w-full h-[300px] bg-[#e21b70]  flex flex-col justify-center items-center">
              <Input className='w-[80%] mt-2'onChange={(e)=> setFile(e.target.value)} type="text" placeholder='Enter URl' />
              <Input type="text" placeholder='Resturant Name' onChange={(e)=> setName(e.target.value)} className='w-[80%] mt-3' />
              <Input className='w-[80%] h-[30px] mt-3' placeholder='Enter Price...' onChange={(e)=> setPrice(e.target.value)}/>
              <Button onClick={Submit} className='mt-2 w-[200px] rounded-none bg-white text-[#e21b70]'>Submit</Button>
          </div>
        </Modal> 

          
        <Modal title="Basic Modal" open={isModalOpens} onOk={handleOks} onCancel={handleCancels}>
            <div className="fo w-full h-[400px] border-2 border-black flex flex-col justify-around items-center">
              <Input type='text' className='w-[80%]'/>
              <Input type='number' className='w-[80%]'/>
              <Input type='text' className='w-[80%]'/>
              <Button></Button>
            </div>
      </Modal>
    </div>
  )
}

export default MenuGallery