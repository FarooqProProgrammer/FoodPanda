import React,{useState} from 'react'
import "./index.css"
import panda from "../../assets/images/PandaIcon.svg"
import {BiUserCircle} from "react-icons/bi"
import {MdStorefront} from "react-icons/md"
import { auth } from '../Config'
import { Button, Modal } from 'antd';
import {BsFacebook} from "react-icons/bs"
import { FacebookAuthProvider,signInWithPopup } from "firebase/auth";
import { useDispatch, useSelector } from 'react-redux'
import { User } from '../../Redux/Action/User'
import {AiOutlineLogout} from "react-icons/ai"
import {  signOut } from "firebase/auth";
const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userLogin,setUserLogin] = useState();
  const userAuth = useSelector(state => state.UserReducer.login)
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const provider = new FacebookAuthProvider();
  const dispatch = useDispatch();
  const Loginfb =()=>{
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        dispatch(User(user))
        setUserLogin(user)
        const credential = FacebookAuthProvider.credentialFromResult(result);
        const accessToken = credential.accessToken;
    
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = FacebookAuthProvider.credentialFromError(error);
    
      });
      
  }


  const logout = () =>{
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
  }

  return (
    <div className='header w-full h-[70px]  flex justify-between items-center'>
        <div className="icons w-[200px] h-[70px]  flex justify-center items-center">
            <img src={panda} alt="" />
            <h3 className='text-[#E21B70] text-2xl ml-1'>FoodPanda</h3>
        </div>
        <div className="right flex">
          
      
          <div className="login w-[150px] h-[70px] flex justify-center items-center cursor-pointer">
              {! userAuth ? 
              <>
              <AiOutlineLogout size={40} className='text-[#E21B70]' onClick={logout}/>
              <p className='ml-2 uppercase text-xl font-black text-[#e21b70]' onClick={logout}>Logout</p>
              </>:
              <>
              <BiUserCircle size={40} className='text-[#E21B70]' onClick={showModal} />
              <p className='ml-2 uppercase text-xl font-black text-[#e21b70]' onClick={showModal} >Login</p>
              </>
              }
              
          
          </div>
          <div className="store w-[50px]  h-[70px] flex justify-center items-center">
            <MdStorefront size={30} className='text-[#e21b70]'/>
          </div>
        </div>




        <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
         <div className="Facebook w-[full] h-[300px] border-2 border-black flex justify-center items-center">
              <div onClick={Loginfb} className="fb w-[300px] h-[60px] rounded-md cursor-pointer bg-[#3578E5] flex justify-center items-center">
                  <BsFacebook size={40} className='text-white'/>
                  <p className='ml-2 text-xl text-white font-black'>Login With facebook</p>
              </div>
         </div>
        </Modal>
    </div>
  )
}

export default Header