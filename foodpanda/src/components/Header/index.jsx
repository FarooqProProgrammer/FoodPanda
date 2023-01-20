import React,{useState} from 'react'
import "./index.css"
import panda from "../../assets/images/PandaIcon.svg"
import {BiUserCircle} from "react-icons/bi"
import {MdStorefront} from "react-icons/md"
import { auth } from '../Config'
import { Button, Input, Modal } from 'antd';
import {BsFacebook} from "react-icons/bs"
import { FacebookAuthProvider,signInWithEmailAndPassword,signInWithPopup } from "firebase/auth";
import { useDispatch, useSelector } from 'react-redux'
import { User } from '../../Redux/Action/User'
import {AiOutlineLogout} from "react-icons/ai"
import {  signOut } from "firebase/auth";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userLogin,setUserLogin] = useState();
  const [email,setEmail] = useState();
  const [password,setPassword] = useState();
  const userAuth = useSelector(state => state.UserReducer.login)
  console.log(userAuth);
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
        // console.log(user);
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


  const logout = (e) =>{
    console.log(e);
    signOut(auth).then(() => {
      console.log("Sign Out Successfully");
      dispatch(User(""))
    }).catch((error) => {
      // An error happened.
    });
  }


    const LoginAdmin = ()=>{
      signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user.email);
        dispatch(User(user))
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
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
               <BiUserCircle size={40} className='text-[#E21B70]' onClick={showModal} />
               <p className='ml-2 uppercase text-xl font-black text-[#e21b70]' onClick={showModal} >Login</p>
               </>
               :
              <>
              <AiOutlineLogout size={40} className='text-[#E21B70]' onClick={logout}/>
              <p className='ml-2 uppercase text-xl font-black text-[#e21b70]' onClick={logout}>Logout</p>
              </>
             
              }
              
          
          </div>
          <div className="store w-[50px]  h-[70px] flex justify-center items-center">
            <MdStorefront size={30} className='text-[#e21b70]'/>
          </div>
        </div>




        <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
         <div className="Facebook w-[full] h-[300px] flex flex-col justify-around items-center">
              <div onClick={Loginfb} className="fb w-[300px] h-[60px] rounded-md cursor-pointer bg-[#3578E5] flex justify-center items-center">
                  <BsFacebook size={40} className='text-white'/>
                  <p className='ml-2 text-xl text-white font-black'>Login With facebook</p>
              </div>
              <p className='text-[#e21b70] font-black'>Or Login as Admin</p>
              <div className="AdminLogin w-[400px] h-[200px] border-2 flex flex-col justify-around items-center">
                  <Input onChange={(e)=> setEmail(e.target.value)} className='w-[80%]' placeholder='Enter Email... ' type='email'/>
                  <Input onChange={(e)=> setPassword(e.target.value)} className='w-[80%]' placeholder='Enter password... ' type='password'/>
                  <Button onClick={LoginAdmin}>Login</Button>
              </div>
         </div>
        </Modal>
    </div>
  )
}

export default Header